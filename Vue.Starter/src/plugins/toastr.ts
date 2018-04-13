import Toastr from "toastr";

const toastr = Toastr.constructor();
toastr.options = Toastr.options;
toastr.options.closeButton = true;
toastr.options.debug = false;
toastr.options.progressBar = true;
toastr.options.positionClass = "toast-top-full-width";
toastr.options.preventDuplicates = true;
toastr.options.showDuration = 300;
toastr.options.hideDuration = 1000;
toastr.options.timeOut = 5000;
toastr.options.extendedTimeOut = 1000;
toastr.options.showEasing = "swing";
toastr.options.hideEasing = "linear";
toastr.options.showMethod = "fadeIn";
toastr.options.hideMethod = "fadeOut";

export default toastr;
