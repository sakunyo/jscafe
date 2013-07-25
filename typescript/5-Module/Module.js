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
var MyModule;
(function (MyModule) {
    var dntExport = (function () {
        function dntExport() {
            return this;
        }
        return dntExport;
    })();
    var MyExportClass = (function () {
        function MyExportClass() {
            return this;
        }
        return MyExportClass;
    })();
    MyModule.MyExportClass = MyExportClass;
})(MyModule || (MyModule = {}));
//@ sourceMappingURL=Module.js.map
