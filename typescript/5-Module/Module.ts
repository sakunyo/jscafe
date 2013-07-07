/**
 * MyModule
 *
 * User: sakuya sugo
 * Date: 2013-07-07
 */


module MyModule {

  class dntExport {
    constructor() {
      return this;
    }
  }


  export class MyExportClass {
    constructor() {
      return this;
    }
  }


  module InnerModule {
    export function exportFunc() {
      return 123;
    }
  }

}

