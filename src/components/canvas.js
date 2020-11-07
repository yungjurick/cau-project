import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { range } from "fxjs";

export default function Canvas({ ...props }) {
  const { sources } = useStaticQuery(graphql`
    query {
      sources: allFile(
        filter: { relativePath: { glob: "letters/*.png" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  const sourceList = sources.edges.map(
    ({ node }) => node.childImageSharp.fixed.src
  );

  useEffect(() => {
    const canvas = document.querySelector("#canvas");
    const c = canvas.getContext("2d");
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    window.addEventListener("resize", e => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    });

    function getDistance(x1, y1, x2, y2) {
      let xDistance = x2 - x1;
      let yDistance = y2 - y1;

      return Math.sqrt(xDistance ** 2 + yDistance ** 2);
    }

    function rotate(velocity, angle) {
      const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
      };

      return rotatedVelocities;
    }

    function resolveCollision(particle, otherParticle) {
      const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
      const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
      const xDist = otherParticle.x - particle.x;
      const yDist = otherParticle.y - particle.y;

      // Prevent accidental overlap of particles
      if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        // Grab angle between the two colliding particles
        const angle = -Math.atan2(
          otherParticle.y - particle.y,
          otherParticle.x - particle.x
        );

        // Store mass in var for better readablity in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1 collision equation
        const v1 = {
          x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
          y: u1.y,
        };
        const v2 = {
          x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
          y: u2.y,
        };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
      }
    }

    class Particle {
      constructor(imageEl, x, y, vx, vy, radius, i) {
        this.x = x;
        this.y = y;
        this.imageEl = imageEl;
        this.velocity = {
          x: vx,
          y: vy,
        };
        this.radius = radius;
        this.index = i;
        this.mass = 1;
      }
      update = particles => {
        this.draw();
        particles.forEach(particle => {
          if (this === particle) return;
          if (
            getDistance(this.x, this.y, particle.x, particle.y) -
              this.radius * 2 <
            0
          ) {
            resolveCollision(this, particle);
          }
        });

        if (
          this.x <= Math.max(0, initialPositions[this.index].x - 200) ||
          this.x + this.radius * 2 >=
            Math.min(
              initialPositions[this.index].x + this.radius * 2 + 200,
              canvas.width
            )
        ) {
          this.velocity.x = -this.velocity.x;
        }
        if (
          this.y <= Math.max(0, initialPositions[this.index].y - 200) ||
          this.y + this.radius * 2 >=
            Math.min(
              initialPositions[this.index].y + this.radius * 2 + 200,
              canvas.height
            )
        ) {
          this.velocity.y = -this.velocity.y;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;
      };
      draw = () => {
        c.drawImage(
          this.imageEl,
          this.x,
          this.y,
          this.radius * 2,
          this.radius * 2
        );
      };
    }

    const initialPositions = [
      { x: 60, y: 140 },
      { x: 170, y: 90 },
      { x: 300, y: 210 },
      { x: 380, y: 280 },
      { x: 350, y: 490 },
    ];

    const canvasWrapWidth = 560;
    const canvasWrapHeight = 636;

    const directions = [
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: -0.9 },
      { x: -0.5, y: -0.9 },
      { x: 0.9, y: 0.4 },
      { x: 0.5, y: -0.7 },
      { x: -0.2, y: 0.9 },
    ];

    let particles;

    function init() {
      particles = [];

      range(5).forEach(i => {
        const radius = canvas.width * 0.08;
        let x = (initialPositions[i].x * canvas.width) / canvasWrapWidth;
        let y = (initialPositions[i].y * canvas.height) / canvasWrapHeight;
        let vx = directions[i].x / 3;
        let vy = directions[i].y / 3;
        let image = new Image();
        image.src = sourceList[i];
        particles.push(new Particle(image, x, y, vx, vy, radius, i));
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, _, _particles) =>
        particle.update(_particles)
      );
    }

    init();
    animate();
  }, [sourceList]);
  return <CanvasComponent id="canvas" {...props} />;
}

const CanvasComponent = styled.canvas`
  position: absolute;
  z-index: 26;
  top: 0;
  left: 0;
`;
