import { describe, it, expect } from 'vitest';
import { GET } from './route';

describe('GET /health', () => {
  it('reports the v1 envelope for diffractwd-web', async () => {
    const res = await GET();
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.data.service).toBe('diffractwd-web');
    expect(body.data.status).toBe('ok');
  });
});
