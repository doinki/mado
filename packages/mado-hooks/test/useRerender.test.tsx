import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useRerender } from '../src';

let count = 0;

function T() {
  const rerender = useRerender();
  count += 1;

  return (
    <div>
      <div data-testid="count">{count}</div>
      <button type="button" onClick={rerender}>
        Rerender
      </button>
    </div>
  );
}

describe('useRerender', () => {
  test('should cause a re-render when the rerender function is called', () => {
    render(<T />);

    expect(screen.getByTestId('count')).toHaveTextContent('1');

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('count')).toHaveTextContent('2');
  });

  test('should maintain the same reference across re-renders', () => {
    const { rerender, result } = renderHook(() => useRerender());

    const firstRef = result.current;

    rerender();

    expect(result.current).toBe(firstRef);
  });
});
