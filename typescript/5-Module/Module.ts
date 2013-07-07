/**
 * MyModule
 *
 * User: sakuya sugo
 * Date: 2013-07-07
 */


/**
 * Module は Internal と External の 2 種
 * Internal はネームスペースを提供
 * External は CommonJS や RequireJS に対応する
 */
// Internal Module
module MyModule {
  class dntExport { // Export されず Module内でのみ有効
    constructor() { return this; }
  }
  export class MyExportClass { // Module名のプロパティにExportされる
    constructor() { return this; }
  }
}
