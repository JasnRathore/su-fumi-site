// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as Logo_getConfig } from './pages/logo';
// prettier-ignore
import type { getConfig as ProductsPa_getConfig } from './pages/products/pa';

// prettier-ignore
type Page =
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| ({ path: '/logo' } & GetConfigResponse<typeof Logo_getConfig>)
| ({ path: '/products/pa' } & GetConfigResponse<typeof ProductsPa_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  