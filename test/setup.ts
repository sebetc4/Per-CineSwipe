import matchers from '@testing-library/jest-dom/matchers';
import { vi, expect } from 'vitest';

expect.extend({...matchers});

vi.mock('../src/services/moviesApi');
