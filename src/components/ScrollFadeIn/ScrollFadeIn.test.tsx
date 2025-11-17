import { render, screen } from '@testing-library/react';
import ScrollFadeIn from './ScrollFadeIn';

describe('ScrollFadeIn', () => {
  it('renders children correctly', () => {
    render(
      <ScrollFadeIn>
        <div>Test Child</div>
      </ScrollFadeIn>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  // Note: Testing Framer Motion animations (like whileInView) in JSDOM is complex
  // and often requires mocking IntersectionObserver or using a real browser environment (e.g., Playwright).
  // This basic test only verifies rendering.
});
