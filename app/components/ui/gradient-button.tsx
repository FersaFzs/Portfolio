'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const StyledWrapper = styled.div`
  button, a {
    font-size: 1.1em;
    padding: 0.8em 1.2em;
    border-radius: 0.5em;
    border: none;
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    cursor: pointer;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    text-decoration: none;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .container {
    position: relative;
    padding: 3px;
    background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)));
    border-radius: 0.9em;
    transition: all 0.4s ease;
    display: inline-block;
  }

  .container::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 0.9em;
    z-index: -10;
    filter: blur(0);
    transition: filter 0.4s ease;
  }

  .container:hover::before {
    background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)));
    filter: blur(1.2em);
  }

  .container:active::before {
    filter: blur(0.2em);
  }

  button:hover, a:hover {
    transform: translateY(-2px);
  }

  button:active, a:active {
    transform: translateY(0);
  }
`;

export function GradientButton({ children, href, onClick, type = 'button', className }: GradientButtonProps) {
  const content = (
    <div className="container">
      {href ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </div>
  );

  return <StyledWrapper>{content}</StyledWrapper>;
} 