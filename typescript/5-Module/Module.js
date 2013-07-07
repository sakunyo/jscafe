/**
* MyModule
*
* User: sakuya sugo
* Date: 2013-07-07
*/
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

    var InnerModule;
    (function (InnerModule) {
        function exportFunc() {
            return 123;
        }
        InnerModule.exportFunc = exportFunc;
    })(InnerModule || (InnerModule = {}));
})(MyModule || (MyModule = {}));
//@ sourceMappingURL=Module.js.map
