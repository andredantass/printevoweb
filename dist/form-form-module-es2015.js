(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "./node_modules/angular2-text-mask/dist/angular2TextMask.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular2-text-mask/dist/angular2TextMask.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var textMaskCore_1 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
var TextMaskConfig = /** @class */ (function () {
    function TextMaskConfig() {
    }
    return TextMaskConfig;
}());
exports.TextMaskConfig = TextMaskConfig;
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = platform_browser_1.ɵgetDOM() ? platform_browser_1.ɵgetDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
var MaskedInputDirective = /** @class */ (function () {
    function MaskedInputDirective(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        this._setupMask();
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype._setupMask = function (create) {
        if (create === void 0) { create = false; }
        if (!this.inputElement) {
            if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this._elementRef.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    MaskedInputDirective.prototype._compositionStart = function () { this._composing = true; };
    MaskedInputDirective.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this._handleInput(value);
    };
    MaskedInputDirective.decorators = [
        { type: core_1.Directive, args: [{
                    host: {
                        '(input)': '_handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '_compositionStart()',
                        '(compositionend)': '_compositionEnd($event.target.value)'
                    },
                    selector: '[textMask]',
                    exportAs: 'textMask',
                    providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    MaskedInputDirective.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ElementRef, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [forms_1.COMPOSITION_BUFFER_MODE,] },] },
    ]; };
    MaskedInputDirective.propDecorators = {
        'textMaskConfig': [{ type: core_1.Input, args: ['textMask',] },],
    };
    return MaskedInputDirective;
}());
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = /** @class */ (function () {
    function TextMaskModule() {
    }
    TextMaskModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [MaskedInputDirective],
                    exports: [MaskedInputDirective]
                },] },
    ];
    /** @nocollapse */
    TextMaskModule.ctorParameters = function () { return []; };
    return TextMaskModule;
}());
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/ng2-file-upload.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-file-upload/ng2-file-upload.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-file-upload/index.js"));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/basic/basic.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/basic/basic.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Default Bootstrap elements\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>\r\n          Bootstrap provides several form control styles, layout options, and custom components for creating a wide\r\n          variety of forms.\r\n        </p>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email address</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleSelect1\">Example select</label>\r\n            <select class=\"form-control\" id=\"exampleSelect1\">\r\n              <option>1</option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option>4</option>\r\n              <option>5</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleSelect2\">Example multiple select</label>\r\n            <select multiple class=\"form-control\" id=\"exampleSelect2\">\r\n              <option>1</option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option>4</option>\r\n              <option>5</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleTextarea\">Example textarea</label>\r\n            <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputFile\">File input</label>\r\n            <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\r\n            <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the\r\n              above input. It's a bit lighter and easily wraps to a new line.</small>\r\n          </div>\r\n          <fieldset class=\"form-group\">\r\n            <p>Radio buttons</p>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\"\r\n                  checked>\r\n                Option one is this and that&mdash;be sure to include why it's great\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\r\n                Option two can be something else and selecting it will deselect option one\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n              <label class=\"form-check-label\">\r\n                <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\"\r\n                  disabled>\r\n                Option three is disabled\r\n              </label>\r\n            </div>\r\n          </fieldset>\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\">\r\n              Check me out\r\n            </label>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Textual inputs\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>Here are examples of <code>.form-control</code> applied to each textual HTML5 <code>&lt;input&gt;</code>\r\n          <code>type</code>.</p>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-text-input\" class=\"col-2 col-form-label\">Text</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"text\" value=\"Artisanal kale\" id=\"example-text-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-search-input\" class=\"col-2 col-form-label\">Search</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"search\" value=\"How do I shoot web\" id=\"example-search-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-email-input\" class=\"col-2 col-form-label\">Email</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"email\" value=\"bootstrap@example.com\" id=\"example-email-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-url-input\" class=\"col-2 col-form-label\">URL</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"url\" value=\"https://getbootstrap.com\" id=\"example-url-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-tel-input\" class=\"col-2 col-form-label\">Telephone</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"tel\" value=\"1-(555)-555-5555\" id=\"example-tel-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-password-input\" class=\"col-2 col-form-label\">Password</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"password\" value=\"hunter2\" id=\"example-password-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-number-input\" class=\"col-2 col-form-label\">Number</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"number\" value=\"42\" id=\"example-number-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-datetime-local-input\" class=\"col-2 col-form-label\">Date and time</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"datetime-local\" value=\"2011-08-19T13:45:00\" id=\"example-datetime-local-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-date-input\" class=\"col-2 col-form-label\">Date</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"date\" value=\"2011-08-19\" id=\"example-date-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-month-input\" class=\"col-2 col-form-label\">Month</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"month\" value=\"2011-08\" id=\"example-month-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-week-input\" class=\"col-2 col-form-label\">Week</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"week\" value=\"2011-W33\" id=\"example-week-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-time-input\" class=\"col-2 col-form-label\">Time</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"time\" value=\"13:45:00\" id=\"example-time-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"example-color-input\" class=\"col-2 col-form-label\">Color</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"color\" value=\"#563d7c\" id=\"example-color-input\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Form groups\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>The <code class=\"highlighter-rouge\">.form-group</code> class is the easiest way to add some structure to\r\n          forms. Its only purpose is to provide <code class=\"highlighter-rouge\">margin-bottom</code> around a label and\r\n          control pairing. As a bonus, since it’s a class you can use it with <code class=\"highlighter-rouge\">&lt;fieldset&gt;</code>s,\r\n          <code class=\"highlighter-rouge\">&lt;div&gt;</code>s, or nearly any other element.</p>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"formGroupExampleInput\">Example label</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Example input\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"formGroupExampleInput2\">Another label</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Another input\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Inline forms\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>Use the <code class=\"highlighter-rouge\">.form-inline</code> class to display a series of labels, form\r\n          controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their\r\n          default states.</p>\r\n\r\n        <p>Visible labels</p>\r\n        <form class=\"form-inline pb-5\">\r\n          <label class=\"sr-only\" for=\"inlineFormInput\">Name</label>\r\n          <input type=\"text\" class=\"form-control mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormInput\" placeholder=\"Jane Doe\">\r\n\r\n          <label class=\"sr-only\" for=\"inlineFormInputGroup\">Username</label>\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\">@</div>\r\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Username\">\r\n          </div>\r\n\r\n          <div class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\"> Remember me\r\n            </label>\r\n          </div>\r\n\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n\r\n        <p>Custom form controls and selects are also supported.</p>\r\n        <form class=\"form-inline\">\r\n          <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Preference</label>\r\n          <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormCustomSelect\">\r\n            <option selected>Choose...</option>\r\n            <option value=\"1\">One</option>\r\n            <option value=\"2\">Two</option>\r\n            <option value=\"3\">Three</option>\r\n          </select>\r\n\r\n          <label class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\">\r\n            <span class=\"custom-control-label\"></span>\r\n            <span class=\"custom-control-description\">Remember my preference</span>\r\n          </label>\r\n\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Grid\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>For more structured form layouts that are also responsive, you can utilize Bootstrap’s <a href=\"/layout/grid/\">predefined\r\n            grid classes</a> or <a href=\"/layout/grid/#sass-mixins\">mixins</a> to create horizontal forms. Add the\r\n          <code class=\"highlighter-rouge\">.row</code> class to form groups and use the <code class=\"highlighter-rouge\">.col-*-*</code>\r\n          classes to specify the width of your labels and controls.</p>\r\n        <form>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n          <fieldset class=\"form-group row\">\r\n            <legend class=\"col-form-legend col-sm-2\">Radios</legend>\r\n            <div class=\"col-sm-10\">\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\"\r\n                    checked>\r\n                  Option one is this and that&mdash;be sure to include why it's great\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\">\r\n                  Option two can be something else and selecting it will deselect option one\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"option3\"\r\n                    disabled>\r\n                  Option three is disabled\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-2\">Checkbox</label>\r\n            <div class=\"col-sm-10\">\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\"> Check me out\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"offset-sm-2 col-sm-10\">\r\n              <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Checkboxes and radios\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>Default checkboxes and radios are improved upon with the help of <code class=\"highlighter-rouge\">.form-check</code>,\r\n          <strong>a single class for both input types that improves the layout and behavior of their HTML elements</strong>.\r\n          Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from\r\n          many.</p>\r\n        <p class=\"mt-4\">Default (stacked)</p>\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n            Option one is this and that&mdash;be sure to include why it's great\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check disabled\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled>\r\n            Option two is disabled\r\n          </label>\r\n        </div>\r\n        <br />\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\r\n              checked>\r\n            Option one is this and that&mdash;be sure to include why it's great\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\r\n            Option two can be something else and selecting it will deselect option one\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check disabled\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\"\r\n              disabled>\r\n            Option three is disabled\r\n          </label>\r\n        </div>\r\n        <br />\r\n        <p class=\"mt-4\">Inline</p>\r\n        <div class=\"form-check form-check-inline\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\"> 1\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\"> 2\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline disabled\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox3\" value=\"option3\" disabled> 3\r\n          </label>\r\n        </div>\r\n        <br />\r\n        <div class=\"form-check form-check-inline\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\"> 1\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> 2\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline disabled\">\r\n          <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\"\r\n              disabled> 3\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Static controls\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>When you need to place plain text next to a form label within a form, use the <code class=\"highlighter-rouge\">.form-control-static</code>\r\n          class on an element of your choice.</p>\r\n        <form>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Email</label>\r\n            <div class=\"col-sm-10\">\r\n              <p class=\"form-control-static\">email@example.com</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Password</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <br />\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <label class=\"sr-only\">Email</label>\r\n            <p class=\"form-control-static\">email@example.com</p>\r\n          </div>\r\n          <div class=\"form-group mx-sm-3\">\r\n            <label for=\"inputPassword2\" class=\"sr-only\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Confirm identity</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Disabled states\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>Add the <code class=\"highlighter-rouge\">disabled</code> boolean attribute on an input to prevent user\r\n          interactions. Disabled inputs appear lighter and add a <code class=\"highlighter-rouge\">not-allowed</code>\r\n          cursor.</p>\r\n        <form>\r\n          <fieldset disabled>\r\n            <div class=\"form-group\">\r\n              <label for=\"disabledTextInput\">Disabled input</label>\r\n              <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"Disabled input\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"disabledSelect\">Disabled select menu</label>\r\n              <select id=\"disabledSelect\" class=\"form-control\">\r\n                <option>Disabled select</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input type=\"checkbox\"> Can't check this\r\n              </label>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Readonly inputs</div>\r\n      <div class=\"card-body\">\r\n        <p>Add the <code class=\"highlighter-rouge\">readonly</code> boolean attribute on an input to prevent\r\n          modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain\r\n          the standard cursor.</p>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Readonly input here…\" readonly>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Control sizing\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>Set heights using classes like <code class=\"highlighter-rouge\">.form-control-lg</code>, and set widths using\r\n          grid column classes like <code class=\"highlighter-rouge\">.col-lg-*</code>.</p>\r\n        <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\".form-control-lg\"><br />\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Default input\"><br />\r\n        <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\".form-control-sm\">\r\n        <br />\r\n        <select class=\"form-control form-control-lg\">\r\n          <option>Large select</option>\r\n        </select><br />\r\n        <select class=\"form-control\">\r\n          <option>Default select</option>\r\n        </select><br />\r\n        <select class=\"form-control form-control-sm\">\r\n          <option>Small select</option>\r\n        </select>\r\n        <br />\r\n        <p class=\"mt-5\">Column sizing</p>\r\n        <p>Wrap inputs in grid columns, or any custom parent element, to easily enforce desired widths.</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\".col-2\">\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\".col-3\">\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Help text</div>\r\n      <div class=\"card-body\">\r\n        <p>Block-level help text in forms can be created using <code class=\"highlighter-rouge\">.form-text</code>\r\n          (previously known as <code class=\"highlighter-rouge\">.help-block</code> in v3). Inline help text can be\r\n          flexibly implemented using any inline HTML element and utility classes like <code class=\"highlighter-rouge\">.text-muted</code>.</p>\r\n\r\n        <p class=\"mt-5\">Block level</p>\r\n        <label for=\"inputPassword5\">Password</label>\r\n        <input type=\"password\" id=\"inputPassword5\" class=\"form-control\" aria-describedby=\"passwordHelpBlock\">\r\n        <p id=\"passwordHelpBlock\" class=\"form-text text-muted\">\r\n          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special\r\n          characters, or emoji.\r\n        </p>\r\n\r\n        <p class=\"mt-5\">Inline</p>\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <label for=\"inputPassword4\">Password</label>\r\n            <input type=\"password\" id=\"inputPassword4\" class=\"form-control mx-sm-3\" aria-describedby=\"passwordHelpInline\">\r\n            <small id=\"passwordHelpInline\" class=\"text-muted\">\r\n              Must be 8-20 characters long.\r\n            </small>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Validation\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>Bootstrap includes validation styles for danger, warning, and success states on most form controls.</p>\r\n        <div class=\"form-group has-success\">\r\n          <label class=\"form-control-label\" for=\"inputSuccess1\">Input with success</label>\r\n          <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\">\r\n          <div class=\"form-control-feedback\">Success! You've done it.</div>\r\n          <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\r\n        </div>\r\n        <div class=\"form-group has-warning\">\r\n          <label class=\"form-control-label\" for=\"inputWarning1\">Input with warning</label>\r\n          <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning1\">\r\n          <div class=\"form-control-feedback\">Shucks, check the formatting of that and try again.</div>\r\n          <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\r\n        </div>\r\n        <div class=\"form-group has-danger\">\r\n          <label class=\"form-control-label\" for=\"inputDanger1\">Input with danger</label>\r\n          <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\">\r\n          <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\r\n          <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\r\n        </div>\r\n        <br />\r\n        <p class=\"mt-5\">Those same states can also be used with horizontal forms.</p>\r\n        <form>\r\n          <div class=\"form-group row has-success\">\r\n            <label for=\"inputHorizontalSuccess\" class=\"col-sm-2 col-form-label\">Email</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"email\" class=\"form-control form-control-success\" id=\"inputHorizontalSuccess\" placeholder=\"name@example.com\">\r\n              <div class=\"form-control-feedback\">Success! You've done it.</div>\r\n              <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row has-warning\">\r\n            <label for=\"inputHorizontalWarning\" class=\"col-sm-2 col-form-label\">Email</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"email\" class=\"form-control form-control-warning\" id=\"inputHorizontalWarning\" placeholder=\"name@example.com\">\r\n              <div class=\"form-control-feedback\">Shucks, check the formatting of that and try again.</div>\r\n              <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row has-danger\">\r\n            <label for=\"inputHorizontalDnger\" class=\"col-sm-2 col-form-label\">Email</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"email\" class=\"form-control form-control-danger\" id=\"inputHorizontalDnger\" placeholder=\"name@example.com\">\r\n              <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\r\n              <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <br />\r\n        <p class=\"mt-5\">Checkboxes and radios are also supported.</p>\r\n        <div class=\"form-check has-success\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"checkboxSuccess\" value=\"option1\">\r\n            Checkbox with success\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check has-warning\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"checkboxWarning\" value=\"option1\">\r\n            Checkbox with warning\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check has-danger\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"checkboxDanger\" value=\"option1\">\r\n            Checkbox with danger\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Custom forms\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>For even more customization and cross browser consistency, use our completely custom form elements to\r\n          replace the browser defaults. They’re built on top of semantic and accessible markup, so they’re solid\r\n          replacements for any default form control.</p>\r\n\r\n        <p class=\"mt-5\">Checkboxes</p>\r\n        <label class=\"custom-control custom-checkbox\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\">\r\n          <span class=\"custom-control-label\"></span>\r\n          <span class=\"custom-control-description\">Check this custom checkbox</span>\r\n        </label>\r\n\r\n        <p class=\"mt-5\">Radios</p>\r\n        <label class=\"custom-control custom-radio\">\r\n          <input id=\"radio1\" name=\"radio\" type=\"radio\" class=\"custom-control-input\">\r\n          <span class=\"custom-control-label\"></span>\r\n          <span class=\"custom-control-description\">Toggle this custom radio</span>\r\n        </label>\r\n        <label class=\"custom-control custom-radio\">\r\n          <input id=\"radio2\" name=\"radio\" type=\"radio\" class=\"custom-control-input\">\r\n          <span class=\"custom-control-label\"></span>\r\n          <span class=\"custom-control-description\">Or toggle this other custom radio</span>\r\n        </label>\r\n\r\n        <p class=\"mt-5\">Disabled</p>\r\n        <label class=\"custom-control custom-checkbox\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" disabled>\r\n          <span class=\"custom-control-label\"></span>\r\n          <span class=\"custom-control-description\">Check this custom checkbox</span>\r\n        </label>\r\n\r\n        <label class=\"custom-control custom-radio\">\r\n          <input id=\"radio3\" name=\"radioDisabled\" type=\"radio\" class=\"custom-control-input\" disabled>\r\n          <span class=\"custom-control-label\"></span>\r\n          <span class=\"custom-control-description\">Toggle this custom radio</span>\r\n        </label>\r\n\r\n        <p class=\"mt-5\">Validation states</p>\r\n        <div class=\"form-group has-success\">\r\n          <label class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\">\r\n            <span class=\"custom-control-label\"></span>\r\n            <span class=\"custom-control-description\">Check this custom checkbox</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"form-group has-warning\">\r\n          <label class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\">\r\n            <span class=\"custom-control-label\"></span>\r\n            <span class=\"custom-control-description\">Check this custom checkbox</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"form-group has-danger mb-0\">\r\n          <label class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\">\r\n            <span class=\"custom-control-label\"></span>\r\n            <span class=\"custom-control-description\">Check this custom checkbox</span>\r\n          </label>\r\n        </div>\r\n\r\n        <p class=\"mt-5\">Stacked</p>\r\n        <div class=\"custom-controls-stacked\">\r\n          <label class=\"custom-control custom-radio\">\r\n            <input id=\"radioStacked1\" name=\"radio-stacked\" type=\"radio\" class=\"custom-control-input\">\r\n            <span class=\"custom-control-label\"></span>\r\n            <span class=\"custom-control-description\">Toggle this custom radio</span>\r\n          </label>\r\n          <label class=\"custom-control custom-radio\">\r\n            <input id=\"radioStacked2\" name=\"radio-stacked\" type=\"radio\" class=\"custom-control-input\">\r\n            <span class=\"custom-control-label\"></span>\r\n            <span class=\"custom-control-description\">Or toggle this other custom radio</span>\r\n          </label>\r\n        </div>\r\n\r\n        <p class=\"mt-5\">Select menu</p>\r\n        <select class=\"custom-select\">\r\n          <option selected>Open this select menu</option>\r\n          <option value=\"1\">One</option>\r\n          <option value=\"2\">Two</option>\r\n          <option value=\"3\">Three</option>\r\n        </select>\r\n\r\n        <p class=\"mt-5\">File browser</p>\r\n        <label class=\"custom-file\">\r\n          <input type=\"file\" id=\"file\" class=\"custom-file-input\">\r\n          <span class=\"custom-file-control\"></span>\r\n        </label>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/masks/masks.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/masks/masks.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-header\">Input text masks</div>\r\n  <div class=\"card-body\">\r\n    <div class=\"form-group row\" *ngFor=\"let choice of choices\">\r\n      <label class=\"col-2 col-form-label\">{{choice.name}}</label>\r\n      <div class=\"col-10\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"{{choice.placeholder}}\" [textMask]=\"{mask: choice.mask}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/upload/upload.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/upload/upload.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-header\">Angular2 File Upload</div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <p>Select files</p>\r\n\r\n        <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\r\n          class=\"well my-drop-zone\">\r\n          Base drop zone\r\n        </div>\r\n\r\n        <div ng2FileDrop [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\" (fileOver)=\"fileOverAnother($event)\"\r\n          [uploader]=\"uploader\" class=\"well my-drop-zone\">\r\n          Another drop zone\r\n        </div>\r\n\r\n        Multiple\r\n        <label class=\"custom-file mb-3\">\r\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple class=\"custom-file-input\">\r\n          <span class=\"custom-file-control\"></span>\r\n        </label>\r\n\r\n        Single\r\n        <label class=\"custom-file\">\r\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"custom-file-input\">\r\n          <span class=\"custom-file-control\"></span>\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"col-md-9\">\r\n        <p>Upload queue</p>\r\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th width=\"50%\">Name</th>\r\n              <th>Size</th>\r\n              <th>Progress</th>\r\n              <th>Status</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of uploader.queue\">\r\n              <td><strong>{{ item?.file?.name }}</strong></td>\r\n              <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n              <td *ngIf=\"uploader.isHTML5\">\r\n                <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                </div>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n              </td>\r\n              <td nowrap>\r\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                  <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                  <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"item.remove()\">\r\n                  <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div>\r\n          <p>Queue progress: <ngb-progressbar type=\"primary\" [value]=\"uploader.progress\"></ngb-progressbar>\r\n          </p>\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n            <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n            <span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/validation/validation.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/validation/validation.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-header\">Input text masks</div>\r\n  <div class=\"card-body\">\r\n    <form class=\"form-horizontal\" novalidate>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': requried?.errors?.required}\">\r\n        <label class=\"col-2 col-form-label\">Required</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"requried\" #requried=\"ngModel\" required [ngClass]=\"{'form-control-danger': requried?.errors?.required}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"requried?.errors?.required\">required error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': minlength?.errors?.minlength}\">\r\n        <label class=\"col-2 col-form-label\">minlength</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"minlength\" #minlength=\"ngModel\" minlength=\"5\" [ngClass]=\"{'form-control-danger': minlength?.errors?.minlength}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"minlength?.errors?.minlength\">minlength error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': maxlength?.errors?.maxlength}\">\r\n        <label class=\"col-2 col-form-label\">maxlength</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"maxlength\" #maxlength=\"ngModel\" maxlength=\"5\" [ngClass]=\"{'form-control-danger': maxlength?.errors?.maxlength}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"maxlength?.errors?.maxlength\">maxlength error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': pattern?.errors?.pattern}\">\r\n        <label class=\"col-2 col-form-label\">pattern</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"pattern\" #pattern=\"ngModel\" pattern=\"[a-z]{6}\"\r\n            [ngClass]=\"{'form-control-danger': pattern?.errors?.pattern}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"pattern?.errors?.pattern\">pattern error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': base64?.errors?.base64}\">\r\n        <label class=\"col-2 col-form-label\">base64</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"base64\" #base64=\"ngModel\" base64 [ngClass]=\"{'form-control-danger': base64?.errors?.base64}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"base64?.errors?.base64\">base64 error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': creditCard?.errors?.creditCard}\">\r\n        <label class=\"col-2 col-form-label\">creditCard</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"creditCard\" #creditCard=\"ngModel\" creditCard [ngClass]=\"{'form-control-danger': creditCard?.errors?.creditCard}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"creditCard?.errors?.creditCard\">creditCard error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': date?.errors?.date}\">\r\n        <label class=\"col-2 col-form-label\">date</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"date\" #date=\"ngModel\" date [ngClass]=\"{'form-control-danger': date?.errors?.date}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"date?.errors?.date\">date error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': dateISO?.errors?.dateISO}\">\r\n        <label class=\"col-2 col-form-label\">dateISO</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"dateISO\" #dateISO=\"ngModel\" dateISO [ngClass]=\"{'form-control-danger': dateISO?.errors?.dateISO}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"dateISO?.errors?.dateISO\">dateISO error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': maxDate?.errors?.maxDate}\">\r\n        <label class=\"col-2 col-form-label\">maxDate</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"maxDate\" #maxDate=\"ngModel\" maxDate=\"2016-12-12\"\r\n            [ngClass]=\"{'form-control-danger': maxDate?.errors?.maxDate}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"maxDate?.errors?.maxDate\">maxDate error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': minDate?.errors?.minDate}\">\r\n        <label class=\"col-2 col-form-label\">minDate</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"minDate\" #minDate=\"ngModel\" minDate=\"2016-12-12\"\r\n            [ngClass]=\"{'form-control-danger': minDate?.errors?.minDate}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"minDate?.errors?.minDate\">minDate error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': digits?.errors?.digits}\">\r\n        <label class=\"col-2 col-form-label\">digits</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"digits\" #digits=\"ngModel\" digits [ngClass]=\"{'form-control-danger': digits?.errors?.digits}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"digits?.errors?.digits\">digits error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': email?.errors?.email}\">\r\n        <label class=\"col-2 col-form-label\">email</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"email\" #email=\"ngModel\" email [ngClass]=\"{'form-control-danger': email?.errors?.email}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"email?.errors?.email\">email error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': equal?.errors?.equal}\">\r\n        <label class=\"col-2 col-form-label\">equal</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"equal\" #equal=\"ngModel\" equal=\"aabbcc\" [ngClass]=\"{'form-control-danger': equal?.errors?.equal}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"equal?.errors?.equal\">equal error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': notEqual?.errors?.notEqual}\">\r\n        <label class=\"col-2 col-form-label\">notEqual</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"notEqual\" #notEqual=\"ngModel\" notEqual=\"aabbcc\"\r\n            [ngClass]=\"{'form-control-danger': notEqual?.errors?.notEqual}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"notEqual?.errors?.notEqual\">notEqual error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': equalTo?.errors?.equalTo}\">\r\n        <label class=\"col-2 col-form-label\">equalTo</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control mb-3\" type=\"text\" ngModel name=\"password\" #password=\"ngModel\" />\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"equalTo\" #equalTo=\"ngModel\" [equalTo]=\"password\"\r\n            [ngClass]=\"{'form-control-danger': equalTo?.errors?.equalTo}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"equalTo?.errors?.equalTo\">equalTo error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': notEqualTo?.errors?.notEqualTo}\">\r\n        <label class=\"col-2 col-form-label\">notEqualTo</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control mb-3\" type=\"text\" ngModel name=\"oldPassword\" #oldPassword=\"ngModel\" />\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"notEqualTo\" #notEqualTo=\"ngModel\" [notEqualTo]=\"oldPassword\"\r\n            [ngClass]=\"{'form-control-danger': notEqualTo?.errors?.notEqualTo}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"notEqualTo?.errors?.notEqualTo\">notEqualTo error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': gt?.errors?.gt}\">\r\n        <label class=\"col-2 col-form-label\">greater than</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"gt\" #gt=\"ngModel\" gt=\"10\" [ngClass]=\"{'form-control-danger': gt?.errors?.gt}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"gt?.errors?.gt\">greater than error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': lt?.errors?.lt}\">\r\n        <label class=\"col-2 col-form-label\">less than</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"lt\" #lt=\"ngModel\" lt=\"5\" [ngClass]=\"{'form-control-danger': lt?.errors?.lt}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"lt?.errors?.lt\">less than error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': lt?.errors?.lt}\">\r\n        <label class=\"col-2 col-form-label\">less than</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"lt\" #lt=\"ngModel\" lt=\"5\" [ngClass]=\"{'form-control-danger': lt?.errors?.lt}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"lt?.errors?.lt\">less than error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': json?.errors?.json}\">\r\n        <label class=\"col-2 col-form-label\">json</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"json\" #json=\"ngModel\" json [ngClass]=\"{'form-control-danger': json?.errors?.json}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"json?.errors?.json\">json error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': max?.errors?.max}\">\r\n        <label class=\"col-2 col-form-label\">max</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"max\" #max=\"ngModel\" max=\"5\" [ngClass]=\"{'form-control-danger': max?.errors?.max}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"max?.errors?.max\">max error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': min?.errors?.min}\">\r\n        <label class=\"col-2 col-form-label\">min</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"min\" #min=\"ngModel\" min=\"5\" [ngClass]=\"{'form-control-danger': min?.errors?.min}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"min?.errors?.min\">min error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': number?.errors?.number}\">\r\n        <label class=\"col-2 col-form-label\">number</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"number\" #number=\"ngModel\" number [ngClass]=\"{'form-control-danger': number?.errors?.number}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"number?.errors?.number\">number error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': phone?.errors?.phone}\">\r\n        <label class=\"col-2 col-form-label\">phone</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"phone\" #phone=\"ngModel\" phone [ngClass]=\"{'form-control-danger': phone?.errors?.phone}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"phone?.errors?.phone\">phone error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': range?.errors?.range}\">\r\n        <label class=\"col-2 col-form-label\">range</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"range\" #range=\"ngModel\" [range]=\"[4,9]\" [ngClass]=\"{'form-control-danger': range?.errors?.range}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"range?.errors?.range\">range error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': rangeLength?.errors?.rangeLength}\">\r\n        <label class=\"col-2 col-form-label\">rangeLength</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"rangeLength\" #rangeLength=\"ngModel\" [rangeLength]=\"[4,9]\"\r\n            [ngClass]=\"{'form-control-danger': rangeLength?.errors?.rangeLength}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"rangeLength?.errors?.rangeLength\">rangeLength error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': url?.errors?.url}\">\r\n        <label class=\"col-2 col-form-label\">url</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"url\" #url=\"ngModel\" url [ngClass]=\"{'form-control-danger': url?.errors?.url}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"url?.errors?.url\">url error</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': uuid?.errors?.uuid}\">\r\n        <label class=\"col-2 col-form-label\">uuid</label>\r\n        <div class=\"col-10\">\r\n          <input class=\"form-control\" type=\"text\" ngModel name=\"uuid\" #uuid=\"ngModel\" uuid=\"3\" [ngClass]=\"{'form-control-danger': uuid?.errors?.uuid}\" />\r\n          <div class=\"form-control-feedback\" *ngIf=\"uuid?.errors?.uuid\">uuid error</div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/text-mask-addons/dist/createAutoCorrectedDatePipe.js":
/*!***************************************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/createAutoCorrectedDatePipe.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mm dd yyyy",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minYear,i=void 0===r?1:r,d=t.maxYear,u=void 0===d?9999:d,s=e.split(/[^dmyHMS]+/).sort(function(e,t){return o.indexOf(e)-o.indexOf(t)});return function(t){var r=[],o={dd:31,mm:12,yy:99,yyyy:u,HH:23,MM:59,SS:59},d={dd:1,mm:1,yy:0,yyyy:i,HH:0,MM:0,SS:0},a=t.split("");s.forEach(function(t){var n=e.indexOf(t),i=parseInt(o[t].toString().substr(0,1),10);parseInt(a[n],10)>i&&(a[n+1]=a[n],a[n]=0,r.push(n))});var y=0,f=s.some(function(r){var s=e.indexOf(r),a=r.length,f=t.substr(s,a).replace(/\D/g,""),p=parseInt(f,10);"mm"===r&&(y=p||0);var c="dd"===r?n[y]:o[r];if("yyyy"===r&&(1!==i||9999!==u)){var l=parseInt(o[r].toString().substring(0,f.length),10),m=parseInt(d[r].toString().substring(0,f.length),10);return p<m||p>l}return p>c||f.length===a&&p<d[r]});return!f&&{value:a.join(""),indexesOfPipedChars:r}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[31,31,29,31,30,31,30,31,31,30,31,30,31],o=["yyyy","yy","mm","dd","HH","MM","SS"]}])});

/***/ }),

/***/ "./node_modules/text-mask-addons/dist/createNumberMask.js":
/*!****************************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/createNumberMask.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});

/***/ }),

/***/ "./node_modules/text-mask-addons/dist/emailMask.js":
/*!*********************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/emailMask.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(3)},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){e=e.replace(y,h);var n=t.placeholderChar,r=t.currentCaretPosition,u=e.indexOf(x),s=e.lastIndexOf(d),f=s<u?-1:s,p=o(e,u+1,x),g=o(e,f-1,d),v=c(e,u,n),m=i(e,u,f,n),O=a(e,f,n,r);v=l(v),m=l(m),O=l(O,!0);var b=v.concat(p).concat(m).concat(g).concat(O);return b}function o(e,t,n){var r=[];return e[t]===n?r.push(n):r.push(g,n),r.push(g),r}function c(e,t){return t===-1?e:e.slice(0,t)}function i(e,t,n,r){var u=h;return t!==-1&&(u=n===-1?e.slice(t+1,e.length):e.slice(t+1,n)),u=u.replace(new RegExp("[\\s"+r+"]",m),h),u===x?p:u.length<1?v:u[u.length-1]===d?u.slice(0,u.length-1):u}function a(e,t,n,r){var u=h;return t!==-1&&(u=e.slice(t+1,e.length)),u=u.replace(new RegExp("[\\s"+n+".]",m),h),0===u.length?e[t-1]===d&&r!==e.length?p:h:u}function l(e,t){return e.split(h).map(function(e){return e===v?e:t?b:O})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),f=r(s),p="*",d=".",h="",x="@",g="[]",v=" ",m="g",O=/[^\s]/,b=/[^.\s]/,y=/\s/g;t.default={mask:u,pipe:f.default}},function(e,t){"use strict";function n(e,t){var n=t.currentCaretPosition,o=t.rawValue,p=t.previousConformedValue,d=t.placeholderChar,h=e;h=r(h);var x=h.indexOf(i),g=null===o.match(new RegExp("[^@\\s."+d+"]"));if(g)return c;if(h.indexOf(l)!==-1||x!==-1&&n!==x+1||o.indexOf(u)===-1&&p!==c&&o.indexOf(a)!==-1)return!1;var v=h.indexOf(u),m=h.slice(v+1,h.length);return(m.match(f)||s).length>1&&h.substr(-1)===a&&n!==o.length&&(h=h.slice(0,h.length-1)),h}function r(e){var t=0;return e.replace(o,function(){return t++,1===t?u:c})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u="@",o=/@/g,c="",i="@.",a=".",l="..",s=[],f=/\./g}])});

/***/ }),

/***/ "./node_modules/text-mask-core/dist/textMaskCore.js":
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,P=y-g,k=P>0,x=0===g,O=P>1&&!k&&!x;if(O)return l;var T=k&&(t===s||s===c),w=0,M=void 0,S=void 0;if(T)w=l-P;else{var j=s.toLowerCase(),_=f.toLowerCase(),V=_.substr(0,l).split(o),A=V.filter(function(e){return j.indexOf(e)!==-1});S=A[A.length-1];var N=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=E!==N,R=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!k&&(F||R)&&N>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(M=!0,S=f[l]);for(var I=v.map(function(e){return j[e]}),J=I.filter(function(e){return e===S}).length,W=A.filter(function(e){return e===S}).length,q=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,L=q+W+J+(M?1:0),z=0,B=0;B<C;B++){var D=j[B];if(w=B+1,D===S&&z++,z>=L)break}}if(k){for(var G=w,H=w;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(M){for(var K=w-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=w;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,P=h.length,k=r.length,x=b-C,O=x>0,T=m+(O?-x:0),w=T+Math.abs(x);if(y===!0&&!O){for(var M=l,S=T;S<w;S++)h[S]===p&&(M+=p);e=e.slice(0,T)+M+e.slice(T,b)}for(var j=e.split(l).map(function(e,r){return{char:e,isNew:r>=T&&r<w}}),_=b-1;_>=0;_--){var V=j[_].char;if(V!==p){var A=_>=T&&C===k;V===h[A?_-x:_]&&j.splice(_,1)}}var N=l,E=!1;e:for(var F=0;F<P;F++){var R=h[F];if(R===p){if(j.length>0)for(;j.length>0;){var I=j.shift(),J=I.char,W=I.isNew;if(J===p&&g!==!0){N+=p;continue e}if(r[F].test(J)){if(y===!0&&W!==!1&&d!==l&&s!==!1&&O){for(var q=j.length,L=null,z=0;z<q;z++){var B=j[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){L=z;break}}null!==L?(N+=J,j.splice(L,1)):F--}else N+=J;continue e}E=!0}g===!1&&(N+=h.substr(F,P));break}N+=R}if(g&&O===!1){for(var D=null,G=0;G<N.length;G++)h[G]===p&&(D=G);N=null!==D?N.substr(0,D+1):l}return{conformedValue:N,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(4),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function l(e){for(var r=[],t=void 0;t=e.indexOf(d),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.isNil=u,r.processCaretTraps=l;var s=t(1),f=[],d="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,P=void 0!==C&&C,k=n.showMask,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var O=void 0,T=void 0;if(s instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var w=a(t),M=o.selectionEnd,S=r.previousConformedValue,j=r.previousPlaceholder,_=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(T=s(w,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:b}),T===!1)return;var V=(0,p.processCaretTraps)(T),A=V.maskWithoutCaretTraps,N=V.indexes;T=A,_=N,O=(0,p.convertMaskToPlaceholder)(T,b)}else T=s;var E={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:M,keepCharPositions:P},F=(0,c.default)(w,T,E),R=F.conformedValue,I=("undefined"==typeof m?"undefined":l(m))===v.strFunction,J={};I&&(J=m(R,u({rawValue:w},E)),J===!1?J={value:S,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var W=I?J.value:R,q=(0,f.default)({previousConformedValue:S,previousPlaceholder:j,conformedValue:W,placeholder:O,rawValue:w,currentCaretPosition:M,placeholderChar:b,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:_}),L=W===O&&0===q,z=x?O:h,B=L?z:W;r.previousConformedValue=B,r.previousPlaceholder=O,o.value!==B&&(o.value=B,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ "./src/app/form/basic/basic.component.scss":
/*!*************************************************!*\
  !*** ./src/app/form/basic/basic.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vYmFzaWMvYmFzaWMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form/basic/basic.component.ts":
/*!***********************************************!*\
  !*** ./src/app/form/basic/basic.component.ts ***!
  \***********************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasicComponent = class BasicComponent {
};
BasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/basic/basic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic.component.scss */ "./src/app/form/basic/basic.component.scss")).default]
    })
], BasicComponent);



/***/ }),

/***/ "./src/app/form/form.module.ts":
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _form_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form.routing */ "./src/app/form/form.routing.ts");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/form/basic/basic.component.ts");
/* harmony import */ var _masks_masks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masks/masks.component */ "./src/app/form/masks/masks.component.ts");
/* harmony import */ var _validation_validation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validation/validation.component */ "./src/app/form/validation/validation.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/form/upload/upload.component.ts");














let FormModule = class FormModule {
};
FormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_form_routing__WEBPACK_IMPORTED_MODULE_9__["FormRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbProgressbarModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_5__["CustomFormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"]
        ],
        declarations: [
            _basic_basic_component__WEBPACK_IMPORTED_MODULE_10__["BasicComponent"],
            _masks_masks_component__WEBPACK_IMPORTED_MODULE_11__["MasksComponent"],
            _validation_validation_component__WEBPACK_IMPORTED_MODULE_12__["ValidationComponent"],
            _upload_upload_component__WEBPACK_IMPORTED_MODULE_13__["UploadComponent"]
        ]
    })
], FormModule);



/***/ }),

/***/ "./src/app/form/form.routing.ts":
/*!**************************************!*\
  !*** ./src/app/form/form.routing.ts ***!
  \**************************************/
/*! exports provided: FormRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutes", function() { return FormRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/form/basic/basic.component.ts");
/* harmony import */ var _masks_masks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masks/masks.component */ "./src/app/form/masks/masks.component.ts");
/* harmony import */ var _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation/validation.component */ "./src/app/form/validation/validation.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/form/upload/upload.component.ts");





const FormRoutes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__["BasicComponent"],
                data: {
                    heading: 'Basic forms'
                }
            },
            {
                path: 'masks',
                component: _masks_masks_component__WEBPACK_IMPORTED_MODULE_2__["MasksComponent"],
                data: {
                    heading: 'Masks'
                }
            },
            {
                path: 'validation',
                component: _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"],
                data: {
                    heading: 'Validation'
                }
            },
            {
                path: 'upload',
                component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__["UploadComponent"],
                data: {
                    heading: 'Upload'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/form/masks/constants.ts":
/*!*****************************************!*\
  !*** ./src/app/form/masks/constants.ts ***!
  \*****************************************/
/*! exports provided: placeholderChars, textMaskProps, alphabetic, digit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeholderChars", function() { return placeholderChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textMaskProps", function() { return textMaskProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphabetic", function() { return alphabetic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return digit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const placeholderChars = {
    whitespace: '\u2000',
    underscore: '_'
};
const textMaskProps = [
    'placeholder',
    'placeholderChar',
    'pipe',
    'keepCharPositions',
    'mask',
    'guide'
];
const alphabetic = /[A-Z]/i;
const digit = /\d/;


/***/ }),

/***/ "./src/app/form/masks/masks.component.scss":
/*!*************************************************!*\
  !*** ./src/app/form/masks/masks.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vbWFza3MvbWFza3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form/masks/masks.component.ts":
/*!***********************************************!*\
  !*** ./src/app/form/masks/masks.component.ts ***!
  \***********************************************/
/*! exports provided: MasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasksComponent", function() { return MasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! text-mask-addons/dist/emailMask */ "./node_modules/text-mask-addons/dist/emailMask.js");
/* harmony import */ var text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! text-mask-addons/dist/createAutoCorrectedDatePipe */ "./node_modules/text-mask-addons/dist/createAutoCorrectedDatePipe.js");
/* harmony import */ var text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/app/form/masks/constants.ts");







const defaultValues = {
    placeholderChar: _constants__WEBPACK_IMPORTED_MODULE_6__["placeholderChars"].whitespace,
    guide: true,
    pipe: null,
    keepCharPositions: false,
    help: null,
    placeholder: null
};
let MasksComponent = class MasksComponent {
    constructor() {
        this.formControlInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.choices = [
            {
                name: 'US phone number',
                mask: [
                    '(',
                    /[1-9]/,
                    /\d/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/
                ],
                placeholder: '(555) 495-3947'
            },
            {
                name: 'US phone number with country code',
                mask: [
                    '+',
                    '1',
                    ' ',
                    '(',
                    /[1-9]/,
                    /\d/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/
                ],
                placeholder: '+1 (555) 495-3947'
            },
            {
                name: 'Date',
                mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
                placeholder: '25/09/1970'
            },
            {
                name: 'Date (auto-corrected)',
                mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
                pipe: text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_4___default()(),
                placeholder: 'Please enter a date'
            },
            {
                name: 'US dollar amount',
                mask: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_2___default()(),
                placeholder: 'Enter an amount'
            },
            {
                name: 'US dollar amount (allows decimal)',
                mask: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_2___default()({ allowDecimal: true }),
                placeholder: 'Enter an amount'
            },
            {
                name: 'Percentage amount',
                mask: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_2___default()({ suffix: '%', prefix: '' }),
                placeholder: 'Enter an amount'
            },
            {
                name: 'Email',
                mask: text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_3___default.a,
                placeholder: 'john@smith.com'
            },
            {
                name: 'US zip code',
                mask: [/[1-9]/, /\d/, /\d/, /\d/, /\d/],
                placeholder: '94303'
            },
            {
                name: 'Canadian postal code',
                mask: [_constants__WEBPACK_IMPORTED_MODULE_6__["alphabetic"], _constants__WEBPACK_IMPORTED_MODULE_6__["digit"], _constants__WEBPACK_IMPORTED_MODULE_6__["alphabetic"], ' ', _constants__WEBPACK_IMPORTED_MODULE_6__["digit"], _constants__WEBPACK_IMPORTED_MODULE_6__["alphabetic"], _constants__WEBPACK_IMPORTED_MODULE_6__["digit"]],
                pipe: conformedValue => ({ value: conformedValue.toUpperCase() }),
                placeholder: 'K1A 0B2'
            }
        ];
        this.mask = [
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/
        ];
        this.myModel = '';
        this.modelWithValue = '5554441234';
        this.formControlInput.setValue('5555551234');
    }
};
MasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-masks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./masks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/masks/masks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./masks.component.scss */ "./src/app/form/masks/masks.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MasksComponent);



/***/ }),

/***/ "./src/app/form/upload/upload.component.scss":
/*!***************************************************!*\
  !*** ./src/app/form/upload/upload.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* $colors\n ------------------------------------------*/\n.my-drop-zone {\n  min-height: 1.5rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border: dashed 1px;\n  border-radius: 0.25rem;\n}\n.nv-file-over {\n  border-color: #dee2e6;\n}\n.another-file-over-class {\n  border-color: #66bb6a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS91cGxvYWQvQzpcXFVzZXJzXFxhbmRyZVxcRG9jdW1lbnRzXFxXb3Jrc3BhY2VcXFByaW50RXZvQXBwXFxwcmludGV2b3dlYi9zcmNcXGFzc2V0c1xcc3R5bGVzXFxzY3NzXFxtaXhpbnNcXF9tYXRlcmlhbC1wYWxldHRlLnNjc3MiLCJzcmMvYXBwL2Zvcm0vdXBsb2FkL0M6XFxVc2Vyc1xcYW5kcmVcXERvY3VtZW50c1xcV29ya3NwYWNlXFxQcmludEV2b0FwcFxccHJpbnRldm93ZWIvc3JjXFxhc3NldHNcXHN0eWxlc1xcc2Nzc1xcY29tcG9uZW50c1xcX2Ryb3B6b25lLnNjc3MiLCJzcmMvYXBwL2Zvcm0vdXBsb2FkL0M6XFxVc2Vyc1xcYW5kcmVcXERvY3VtZW50c1xcV29ya3NwYWNlXFxQcmludEV2b0FwcFxccHJpbnRldm93ZWIvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvZm9ybS91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzRDQUFBO0FDS0E7RUFDRSxrQkFBQTtFQUNBLG1CQzBITztFRHpIUCxhQ3lITztFRHhIUCxrQkFBQTtFQUdFLHNCQzhOMEI7QUNsTzlCO0FGWUE7RUFDRSxxQkNYUztBQ0VYO0FGWUE7RUFDRSxxQkFBQTtBRVRGIiwiZmlsZSI6InNyYy9hcHAvZm9ybS91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogJGNvbG9yc1xyXG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXHJcbi8vIFNlZSBodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL3N0eWxlL2NvbG9yLmh0bWxcclxuLy9cclxuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cclxuLy8gY2FsY3VsYXRlIHRoZW0uIFRoZXNlIGNvbnRyYXN0IGNvbG9ycyBhcmUgcHVsbGVkIGZyb20gdGhlIHB1YmxpYyBNYXRlcmlhbCBEZXNpZ24gc3BlYyBzd2F0Y2hlcy5cclxuLy8gV2hpbGUgdGhlIGNvbnRyYXN0IGNvbG9ycyBpbiB0aGUgc3BlYyBhcmUgbm90IHByZXNjcmlwdGl2ZSwgd2UgdXNlIHRoZW0gZm9yIGNvbnZlbmllbmNlLlxyXG5cclxuXHJcbiRibGFjay04Ny1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjg3KTtcclxuJHdoaXRlLTg3LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuODcpO1xyXG4kYmxhY2stMTItb3BhY2l0eTogcmdiYShibGFjaywgMC4xMik7XHJcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcclxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XHJcbiR3aGl0ZS02LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMDYpO1xyXG5cclxuJG1hdC1yZWQ6ICg1MDogI2ZmZWJlZSxcclxuMTAwOiAjZmZjZGQyLFxyXG4yMDA6ICNlZjlhOWEsXHJcbjMwMDogI2U1NzM3MyxcclxuNDAwOiAjZWY1MzUwLFxyXG41MDA6ICNmNDQzMzYsXHJcbjYwMDogI2U1MzkzNSxcclxuNzAwOiAjZDMyZjJmLFxyXG44MDA6ICNjNjI4MjgsXHJcbjkwMDogI2I3MWMxYyxcclxuQTEwMDogI2ZmOGE4MCxcclxuQTIwMDogI2ZmNTI1MixcclxuQTQwMDogI2ZmMTc0NCxcclxuQTcwMDogI2Q1MDAwMCxcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjUwMDogd2hpdGUsXHJcbjYwMDogd2hpdGUsXHJcbjcwMDogd2hpdGUsXHJcbjgwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjkwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiB3aGl0ZSxcclxuQTQwMDogd2hpdGUsXHJcbkE3MDA6IHdoaXRlLFxyXG4pKTtcclxuXHJcbiRtYXQtcGluazogKDUwOiAjZmNlNGVjLFxyXG4xMDA6ICNmOGJiZDAsXHJcbjIwMDogI2Y0OGZiMSxcclxuMzAwOiAjZjA2MjkyLFxyXG40MDA6ICNlYzQwN2EsXHJcbjUwMDogI2U5MWU2MyxcclxuNjAwOiAjZDgxYjYwLFxyXG43MDA6ICNjMjE4NWIsXHJcbjgwMDogI2FkMTQ1NyxcclxuOTAwOiAjODgwZTRmLFxyXG5BMTAwOiAjZmY4MGFiLFxyXG5BMjAwOiAjZmY0MDgxLFxyXG5BNDAwOiAjZjUwMDU3LFxyXG5BNzAwOiAjYzUxMTYyLFxyXG5jb250cmFzdDogKDUwOiAkYmxhY2stODctb3BhY2l0eSxcclxuMTAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuMjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuMzAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuNDAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuNTAwOiB3aGl0ZSxcclxuNjAwOiB3aGl0ZSxcclxuNzAwOiAkd2hpdGUtODctb3BhY2l0eSxcclxuODAwOiAkd2hpdGUtODctb3BhY2l0eSxcclxuOTAwOiAkd2hpdGUtODctb3BhY2l0eSxcclxuQTEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkEyMDA6IHdoaXRlLFxyXG5BNDAwOiB3aGl0ZSxcclxuQTcwMDogd2hpdGUsXHJcbikpO1xyXG5cclxuJG1hdC1wdXJwbGU6ICg1MDogI2YzZTVmNSxcclxuMTAwOiAjZTFiZWU3LFxyXG4yMDA6ICNjZTkzZDgsXHJcbjMwMDogI2JhNjhjOCxcclxuNDAwOiAjYWI0N2JjLFxyXG41MDA6ICM5YzI3YjAsXHJcbjYwMDogIzhlMjRhYSxcclxuNzAwOiAjN2IxZmEyLFxyXG44MDA6ICM2YTFiOWEsXHJcbjkwMDogIzRhMTQ4YyxcclxuQTEwMDogI2VhODBmYyxcclxuQTIwMDogI2UwNDBmYixcclxuQTQwMDogI2Q1MDBmOSxcclxuQTcwMDogI2FhMDBmZixcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogd2hpdGUsXHJcbjQwMDogd2hpdGUsXHJcbjUwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjYwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjcwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjgwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjkwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiB3aGl0ZSxcclxuQTQwMDogd2hpdGUsXHJcbkE3MDA6IHdoaXRlLFxyXG4pKTtcclxuXHJcbiRtYXQtZGVlcC1wdXJwbGU6ICg1MDogI2VkZTdmNixcclxuMTAwOiAjZDFjNGU5LFxyXG4yMDA6ICNiMzlkZGIsXHJcbjMwMDogIzk1NzVjZCxcclxuNDAwOiAjN2U1N2MyLFxyXG41MDA6ICM2NzNhYjcsXHJcbjYwMDogIzVlMzViMSxcclxuNzAwOiAjNTEyZGE4LFxyXG44MDA6ICM0NTI3YTAsXHJcbjkwMDogIzMxMWI5MixcclxuQTEwMDogI2IzODhmZixcclxuQTIwMDogIzdjNGRmZixcclxuQTQwMDogIzY1MWZmZixcclxuQTcwMDogIzYyMDBlYSxcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogd2hpdGUsXHJcbjQwMDogd2hpdGUsXHJcbjUwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjYwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjcwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjgwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjkwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiB3aGl0ZSxcclxuQTQwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbkE3MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG4pKTtcclxuXHJcbiRtYXQtaW5kaWdvOiAoNTA6ICNlOGVhZjYsXHJcbjEwMDogI2M1Y2FlOSxcclxuMjAwOiAjOWZhOGRhLFxyXG4zMDA6ICM3OTg2Y2IsXHJcbjQwMDogIzVjNmJjMCxcclxuNTAwOiAjM2Y1MWI1LFxyXG42MDA6ICMzOTQ5YWIsXHJcbjcwMDogIzMwM2Y5ZixcclxuODAwOiAjMjgzNTkzLFxyXG45MDA6ICMxYTIzN2UsXHJcbkExMDA6ICM4YzllZmYsXHJcbkEyMDA6ICM1MzZkZmUsXHJcbkE0MDA6ICMzZDVhZmUsXHJcbkE3MDA6ICMzMDRmZmUsXHJcbmNvbnRyYXN0OiAoNTA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4xMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4yMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4zMDA6IHdoaXRlLFxyXG40MDA6IHdoaXRlLFxyXG41MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG42MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG43MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG44MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG45MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG5BMTAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTIwMDogd2hpdGUsXHJcbkE0MDA6IHdoaXRlLFxyXG5BNzAwOiAkd2hpdGUtODctb3BhY2l0eSxcclxuKSk7XHJcblxyXG4kbWF0LWJsdWU6ICg1MDogI2UzZjJmZCxcclxuMTAwOiAjYmJkZWZiLFxyXG4yMDA6ICM5MGNhZjksXHJcbjMwMDogIzY0YjVmNixcclxuNDAwOiAjNDJhNWY1LFxyXG41MDA6ICMyMTk2ZjMsXHJcbjYwMDogIzFlODhlNSxcclxuNzAwOiAjMTk3NmQyLFxyXG44MDA6ICMxNTY1YzAsXHJcbjkwMDogIzBkNDdhMSxcclxuQTEwMDogIzgyYjFmZixcclxuQTIwMDogIzQ0OGFmZixcclxuQTQwMDogIzI5NzlmZixcclxuQTcwMDogIzI5NjJmZixcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjUwMDogd2hpdGUsXHJcbjYwMDogd2hpdGUsXHJcbjcwMDogd2hpdGUsXHJcbjgwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjkwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiB3aGl0ZSxcclxuQTQwMDogd2hpdGUsXHJcbkE3MDA6IHdoaXRlLFxyXG4pKTtcclxuXHJcbiRtYXQtbGlnaHQtYmx1ZTogKDUwOiAjZTFmNWZlLFxyXG4xMDA6ICNiM2U1ZmMsXHJcbjIwMDogIzgxZDRmYSxcclxuMzAwOiAjNGZjM2Y3LFxyXG40MDA6ICMyOWI2ZjYsXHJcbjUwMDogIzAzYTlmNCxcclxuNjAwOiAjMDM5YmU1LFxyXG43MDA6ICMwMjg4ZDEsXHJcbjgwMDogIzAyNzdiZCxcclxuOTAwOiAjMDE1NzliLFxyXG5BMTAwOiAjODBkOGZmLFxyXG5BMjAwOiAjNDBjNGZmLFxyXG5BNDAwOiAjMDBiMGZmLFxyXG5BNzAwOiAjMDA5MWVhLFxyXG5jb250cmFzdDogKDUwOiAkYmxhY2stODctb3BhY2l0eSxcclxuMTAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuMjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuMzAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuNDAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuNTAwOiB3aGl0ZSxcclxuNjAwOiB3aGl0ZSxcclxuNzAwOiB3aGl0ZSxcclxuODAwOiB3aGl0ZSxcclxuOTAwOiAkd2hpdGUtODctb3BhY2l0eSxcclxuQTEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkEyMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BNDAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTcwMDogd2hpdGUsXHJcbikpO1xyXG5cclxuJG1hdC1jeWFuOiAoNTA6ICNlMGY3ZmEsXHJcbjEwMDogI2IyZWJmMixcclxuMjAwOiAjODBkZWVhLFxyXG4zMDA6ICM0ZGQwZTEsXHJcbjQwMDogIzI2YzZkYSxcclxuNTAwOiAjMDBiY2Q0LFxyXG42MDA6ICMwMGFjYzEsXHJcbjcwMDogIzAwOTdhNyxcclxuODAwOiAjMDA4MzhmLFxyXG45MDA6ICMwMDYwNjQsXHJcbkExMDA6ICM4NGZmZmYsXHJcbkEyMDA6ICMxOGZmZmYsXHJcbkE0MDA6ICMwMGU1ZmYsXHJcbkE3MDA6ICMwMGI4ZDQsXHJcbmNvbnRyYXN0OiAoNTA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4xMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4yMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4zMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG40MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG41MDA6IHdoaXRlLFxyXG42MDA6IHdoaXRlLFxyXG43MDA6IHdoaXRlLFxyXG44MDA6IHdoaXRlLFxyXG45MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG5BMTAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkE0MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BNzAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuKSk7XHJcblxyXG4kbWF0LXRlYWw6ICg1MDogI2UwZjJmMSxcclxuMTAwOiAjYjJkZmRiLFxyXG4yMDA6ICM4MGNiYzQsXHJcbjMwMDogIzRkYjZhYyxcclxuNDAwOiAjMjZhNjlhLFxyXG41MDA6ICMwMDk2ODgsXHJcbjYwMDogIzAwODk3YixcclxuNzAwOiAjMDA3OTZiLFxyXG44MDA6ICMwMDY5NWMsXHJcbjkwMDogIzAwNGQ0MCxcclxuQTEwMDogI2E3ZmZlYixcclxuQTIwMDogIzY0ZmZkYSxcclxuQTQwMDogIzFkZTliNixcclxuQTcwMDogIzAwYmZhNSxcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjUwMDogd2hpdGUsXHJcbjYwMDogd2hpdGUsXHJcbjcwMDogd2hpdGUsXHJcbjgwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjkwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkE3MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4pKTtcclxuXHJcbiRtYXQtZ3JlZW46ICg1MDogI2U4ZjVlOSxcclxuMTAwOiAjYzhlNmM5LFxyXG4yMDA6ICNhNWQ2YTcsXHJcbjMwMDogIzgxYzc4NCxcclxuNDAwOiAjNjZiYjZhLFxyXG41MDA6ICM0Y2FmNTAsXHJcbjYwMDogIzQzYTA0NyxcclxuNzAwOiAjMzg4ZTNjLFxyXG44MDA6ICMyZTdkMzIsXHJcbjkwMDogIzFiNWUyMCxcclxuQTEwMDogI2I5ZjZjYSxcclxuQTIwMDogIzY5ZjBhZSxcclxuQTQwMDogIzAwZTY3NixcclxuQTcwMDogIzAwYzg1MyxcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjUwMDogd2hpdGUsXHJcbjYwMDogd2hpdGUsXHJcbjcwMDogd2hpdGUsXHJcbjgwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjkwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkE3MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4pKTtcclxuXHJcbiRtYXQtbGlnaHQtZ3JlZW46ICg1MDogI2YxZjhlOSxcclxuMTAwOiAjZGNlZGM4LFxyXG4yMDA6ICNjNWUxYTUsXHJcbjMwMDogI2FlZDU4MSxcclxuNDAwOiAjOWNjYzY1LFxyXG41MDA6ICM4YmMzNGEsXHJcbjYwMDogIzdjYjM0MixcclxuNzAwOiAjNjg5ZjM4LFxyXG44MDA6ICM1NThiMmYsXHJcbjkwMDogIzMzNjkxZSxcclxuQTEwMDogI2NjZmY5MCxcclxuQTIwMDogI2IyZmY1OSxcclxuQTQwMDogIzc2ZmYwMyxcclxuQTcwMDogIzY0ZGQxNyxcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjUwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjYwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjcwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjgwMDogd2hpdGUsXHJcbjkwMDogd2hpdGUsXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkE3MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4pKTtcclxuXHJcbiRtYXQtbGltZTogKDUwOiAjZjlmYmU3LFxyXG4xMDA6ICNmMGY0YzMsXHJcbjIwMDogI2U2ZWU5YyxcclxuMzAwOiAjZGNlNzc1LFxyXG40MDA6ICNkNGUxNTcsXHJcbjUwMDogI2NkZGMzOSxcclxuNjAwOiAjYzBjYTMzLFxyXG43MDA6ICNhZmI0MmIsXHJcbjgwMDogIzllOWQyNCxcclxuOTAwOiAjODI3NzE3LFxyXG5BMTAwOiAjZjRmZjgxLFxyXG5BMjAwOiAjZWVmZjQxLFxyXG5BNDAwOiAjYzZmZjAwLFxyXG5BNzAwOiAjYWVlYTAwLFxyXG5jb250cmFzdDogKDUwOiAkYmxhY2stODctb3BhY2l0eSxcclxuMTAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuMjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuMzAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuNDAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuNTAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuNjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuNzAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuODAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuOTAwOiB3aGl0ZSxcclxuQTEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkEyMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BNDAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTcwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbikpO1xyXG5cclxuJG1hdC15ZWxsb3c6ICg1MDogI2ZmZmRlNyxcclxuMTAwOiAjZmZmOWM0LFxyXG4yMDA6ICNmZmY1OWQsXHJcbjMwMDogI2ZmZjE3NixcclxuNDAwOiAjZmZlZTU4LFxyXG41MDA6ICNmZmViM2IsXHJcbjYwMDogI2ZkZDgzNSxcclxuNzAwOiAjZmJjMDJkLFxyXG44MDA6ICNmOWE4MjUsXHJcbjkwMDogI2Y1N2YxNyxcclxuQTEwMDogI2ZmZmY4ZCxcclxuQTIwMDogI2ZmZmYwMCxcclxuQTQwMDogI2ZmZWEwMCxcclxuQTcwMDogI2ZmZDYwMCxcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjUwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjYwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjcwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjgwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjkwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkE3MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4pKTtcclxuXHJcbiRtYXQtYW1iZXI6ICg1MDogI2ZmZjhlMSxcclxuMTAwOiAjZmZlY2IzLFxyXG4yMDA6ICNmZmUwODIsXHJcbjMwMDogI2ZmZDU0ZixcclxuNDAwOiAjZmZjYTI4LFxyXG41MDA6ICNmZmMxMDcsXHJcbjYwMDogI2ZmYjMwMCxcclxuNzAwOiAjZmZhMDAwLFxyXG44MDA6ICNmZjhmMDAsXHJcbjkwMDogI2ZmNmYwMCxcclxuQTEwMDogI2ZmZTU3ZixcclxuQTIwMDogI2ZmZDc0MCxcclxuQTQwMDogI2ZmYzQwMCxcclxuQTcwMDogI2ZmYWIwMCxcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjUwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjYwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjcwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjgwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjkwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTQwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkE3MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4pKTtcclxuXHJcbiRtYXQtb3JhbmdlOiAoNTA6ICNmZmYzZTAsXHJcbjEwMDogI2ZmZTBiMixcclxuMjAwOiAjZmZjYzgwLFxyXG4zMDA6ICNmZmI3NGQsXHJcbjQwMDogI2ZmYTcyNixcclxuNTAwOiAjZmY5ODAwLFxyXG42MDA6ICNmYjhjMDAsXHJcbjcwMDogI2Y1N2MwMCxcclxuODAwOiAjZWY2YzAwLFxyXG45MDA6ICNlNjUxMDAsXHJcbkExMDA6ICNmZmQxODAsXHJcbkEyMDA6ICNmZmFiNDAsXHJcbkE0MDA6ICNmZjkxMDAsXHJcbkE3MDA6ICNmZjZkMDAsXHJcbmNvbnRyYXN0OiAoNTA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4xMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4yMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4zMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG40MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG41MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG42MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG43MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG44MDA6IHdoaXRlLFxyXG45MDA6IHdoaXRlLFxyXG5BMTAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkE0MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BNzAwOiBibGFjayxcclxuKSk7XHJcblxyXG4kbWF0LWRlZXAtb3JhbmdlOiAoNTA6ICNmYmU5ZTcsXHJcbjEwMDogI2ZmY2NiYyxcclxuMjAwOiAjZmZhYjkxLFxyXG4zMDA6ICNmZjhhNjUsXHJcbjQwMDogI2ZmNzA0MyxcclxuNTAwOiAjZmY1NzIyLFxyXG42MDA6ICNmNDUxMWUsXHJcbjcwMDogI2U2NGExOSxcclxuODAwOiAjZDg0MzE1LFxyXG45MDA6ICNiZjM2MGMsXHJcbkExMDA6ICNmZjllODAsXHJcbkEyMDA6ICNmZjZlNDAsXHJcbkE0MDA6ICNmZjNkMDAsXHJcbkE3MDA6ICNkZDJjMDAsXHJcbmNvbnRyYXN0OiAoNTA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4xMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4yMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4zMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG40MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG41MDA6IHdoaXRlLFxyXG42MDA6IHdoaXRlLFxyXG43MDA6IHdoaXRlLFxyXG44MDA6IHdoaXRlLFxyXG45MDA6IHdoaXRlLFxyXG5BMTAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkE0MDA6IHdoaXRlLFxyXG5BNzAwOiB3aGl0ZSxcclxuKSk7XHJcblxyXG4kbWF0LWJyb3duOiAoNTA6ICNlZmViZTksXHJcbjEwMDogI2Q3Y2NjOCxcclxuMjAwOiAjYmNhYWE0LFxyXG4zMDA6ICNhMTg4N2YsXHJcbjQwMDogIzhkNmU2MyxcclxuNTAwOiAjNzk1NTQ4LFxyXG42MDA6ICM2ZDRjNDEsXHJcbjcwMDogIzVkNDAzNyxcclxuODAwOiAjNGUzNDJlLFxyXG45MDA6ICMzZTI3MjMsXHJcbkExMDA6ICNkN2NjYzgsXHJcbkEyMDA6ICNiY2FhYTQsXHJcbkE0MDA6ICM4ZDZlNjMsXHJcbkE3MDA6ICM1ZDQwMzcsXHJcbmNvbnRyYXN0OiAoNTA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4xMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4yMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4zMDA6IHdoaXRlLFxyXG40MDA6IHdoaXRlLFxyXG41MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG42MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG43MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG44MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG45MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG5BMTAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkE0MDA6IHdoaXRlLFxyXG5BNzAwOiAkd2hpdGUtODctb3BhY2l0eSxcclxuKSk7XHJcblxyXG4kbWF0LWdyZXk6ICgwOiAjZmZmZmZmLFxyXG41MDogI2ZhZmFmYSxcclxuMTAwOiAjZjVmNWY1LFxyXG4yMDA6ICNlZWVlZWUsXHJcbjMwMDogI2UwZTBlMCxcclxuNDAwOiAjYmRiZGJkLFxyXG41MDA6ICM5ZTllOWUsXHJcbjYwMDogIzc1NzU3NSxcclxuNzAwOiAjNjE2MTYxLFxyXG44MDA6ICM0MjQyNDIsXHJcbjkwMDogIzIxMjEyMSxcclxuMTAwMDogIzAwMDAwMCxcclxuQTEwMDogI2ZmZmZmZixcclxuQTIwMDogI2VlZWVlZSxcclxuQTQwMDogI2JkYmRiZCxcclxuQTcwMDogIzYxNjE2MSxcclxuY29udHJhc3Q6ICgwOiAkYmxhY2stODctb3BhY2l0eSxcclxuNTA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4xMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4yMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG4zMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG40MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG41MDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG42MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG43MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG44MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG45MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG4xMDAwOiAkd2hpdGUtODctb3BhY2l0eSxcclxuQTEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbkEyMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BNDAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTcwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbikpO1xyXG5cclxuJG1hdC1ibHVlLWdyZXk6ICg1MDogI2VjZWZmMSxcclxuMTAwOiAjY2ZkOGRjLFxyXG4yMDA6ICNiMGJlYzUsXHJcbjMwMDogIzkwYTRhZSxcclxuNDAwOiAjNzg5MDljLFxyXG41MDA6ICM2MDdkOGIsXHJcbjYwMDogIzU0NmU3YSxcclxuNzAwOiAjNDU1YTY0LFxyXG44MDA6ICMzNzQ3NGYsXHJcbjkwMDogIzI2MzIzOCxcclxuQTEwMDogI2NmZDhkYyxcclxuQTIwMDogI2IwYmVjNSxcclxuQTQwMDogIzc4OTA5YyxcclxuQTcwMDogIzQ1NWE2NCxcclxuY29udHJhc3Q6ICg1MDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjEwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjIwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjMwMDogJGJsYWNrLTg3LW9wYWNpdHksXHJcbjQwMDogd2hpdGUsXHJcbjUwMDogd2hpdGUsXHJcbjYwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjcwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjgwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbjkwMDogJHdoaXRlLTg3LW9wYWNpdHksXHJcbkExMDA6ICRibGFjay04Ny1vcGFjaXR5LFxyXG5BMjAwOiAkYmxhY2stODctb3BhY2l0eSxcclxuQTQwMDogd2hpdGUsXHJcbkE3MDA6ICR3aGl0ZS04Ny1vcGFjaXR5LFxyXG4pKTtcclxuXHJcbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxyXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxyXG4vLyBAcGFyYW0gJGh1ZVxyXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJHBhbGV0dGUsIGNvbnRyYXN0KSwgJGh1ZSk7XHJcbn1cclxuXHJcbi8vIEdldHMgYSBjb2xvciBmcm9tIGEgdGhlbWUgcGFsZXR0ZSAodGhlIG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXHJcbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcclxuLy8gaHVlcyAoZGVmYXVsdCwgbGlnaHRlciwgZGFya2VyKSwgb3IgYW55IG9mIHRoZSBhZm9yZW1lbnRpb25lZCBwcmVmaXhlZCB3aXRoIFwiLWNvbnRyYXN0XCIuXHJcbi8vXHJcbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxyXG4vLyBAcGFyYW0gJGh1ZSBUaGUgaHVlIGZyb20gdGhlIHBhbGV0dGUgdG8gdXNlLiBJZiB0aGlzIGlzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBpdCB3aWxsXHJcbi8vICAgICBiZSB0cmVhdGVkIGFzIG9wYWNpdHkuXHJcbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxyXG5AZnVuY3Rpb24gbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlOiBkZWZhdWx0LCAkb3BhY2l0eTogMSkge1xyXG5cclxuICAvLyBJZiBodWVLZXkgaXMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHRoZW4gaXQgYWN0dWFsbHkgY29udGFpbnMgYW5cclxuICAvLyBvcGFjaXR5IHZhbHVlLCBzbyByZWNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGh1ZSBhbmQgdGhhdCBnaXZlbiBvcGFjaXR5LlxyXG4gIEBpZiB0eXBlLW9mKCRodWUpPT1udW1iZXIgYW5kICRodWU+PTAgYW5kICRodWUgPD0xIHtcclxuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcclxuICB9XHJcblxyXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XHJcbiAgJG9wYWNpdHk6IGlmKG9wYWNpdHkoJGNvbG9yKSA8IDEsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpO1xyXG5cclxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL21peGlucy9tYXRlcmlhbC1wYWxldHRlXCI7XHJcbkBpbXBvcnQgXCIuLi92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5teS1kcm9wLXpvbmUge1xyXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAkc3BhY2VyO1xyXG4gIHBhZGRpbmc6ICRzcGFjZXI7XHJcbiAgYm9yZGVyOiBkYXNoZWQgMXB4O1xyXG5cclxuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgQGVsc2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbn1cclxuXHJcbi5udi1maWxlLW92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4uYW5vdGhlci1maWxlLW92ZXItY2xhc3Mge1xyXG4gIGJvcmRlci1jb2xvcjogdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpO1xyXG59XHJcbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICApLFxuICAkZ3JheXNcbik7XG5cbiRibHVlOiAgICAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAgICMyOGE3NDUgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMTdhMmI4ICFkZWZhdWx0O1xuXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gICAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICAgIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkLCBubyBsb25nZXIgYWZmZWN0cyBhbnkgY29tcGlsZWQgQ1NTXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAwOiAwLFxuICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAyOiAoJHNwYWNlciAqIC41KSxcbiAgICAzOiAkc3BhY2VyLFxuICAgIDQ6ICgkc3BhY2VyICogMS41KSxcbiAgICA1OiAoJHNwYWNlciAqIDMpXG4gICksXG4gICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAoXG4gICAgMjU6IDI1JSxcbiAgICA1MDogNTAlLFxuICAgIDc1OiA3NSUsXG4gICAgMTAwOiAxMDAlLFxuICAgIGF1dG86IGF1dG9cbiAgKSxcbiAgJHNpemVzXG4pO1xuXG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRsaW5rLWNvbG9yLCAxNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lICFkZWZhdWx0O1xuLy8gRGFya2VuIHBlcmNlbnRhZ2UgZm9yIGxpbmtzIHdpdGggYC50ZXh0LSpgIGNsYXNzIChlLmcuIGAudGV4dC1zdWNjZXNzYClcbiRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2U6IDE1JSAhZGVmYXVsdDtcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5AaW5jbHVkZSBfYXNzZXJ0LXN0YXJ0cy1hdC16ZXJvKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuXG5cbi8vIEdyaWQgY29udGFpbmVyc1xuLy9cbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkY29udGFpbmVyLW1heC13aWR0aHMsIFwiJGNvbnRhaW5lci1tYXgtd2lkdGhzXCIpO1xuXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1jb2x1bW5zOiAgICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG5cblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG5cbiRyb3VuZGVkLXBpbGw6ICAgICAgICAgICAgICAgIDUwcmVtICFkZWZhdWx0O1xuXG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNvbXBvbmVudC1hY3RpdmUtYmc6ICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1iYXNlOiAgICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tZmFkZTogICAgICAgICAgICAgb3BhY2l0eSAuMTVzIGxpbmVhciAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiAgICAgICAgIGhlaWdodCAuMzVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6IGpvaW4oXG4gIChcbiAgICAoMjEgOSksXG4gICAgKDE2IDkpLFxuICAgICg0IDMpLFxuICAgICgxIDEpLFxuICApLFxuICAkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zXG4pO1xuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6ICAgICAgICAgbGlnaHRlciAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIDcwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIGJvbGRlciAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgICAgICA2cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgNS41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4ka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgLjI1KSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogIDAgMCAwICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAyNSUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW19ICsgI3skaW5wdXQtcGFkZGluZy15fSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAvIDJ9KSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAxZW19ICsgI3skaW5wdXQtcGFkZGluZy15ICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbX0gKyAjeyRpbnB1dC1idG4tcGFkZGluZy15LXNtICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbX0gKyAjeyRpbnB1dC1idG4tcGFkZGluZy15LWxnICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDQnJTNlJTNjcGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgY2FsYygjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZX0gLSAjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNH0pICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogICAgICAgICAgICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6ICAgMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6ICAgICAgICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvciBuby1yZXBlYXQgcmlnaHQgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemUgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXG5cbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogY2FsYygoMWVtICsgI3syICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15fSkgKiAzIC8gNCArICN7JGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmd9KSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246ICAgICAgY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICAgICAgICAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogICAgMCAwIDAgJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICAgICAgICAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICAgICAgICAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcbiRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG4kZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nLTIgLTIgNyA3JyUzZSUzY3BhdGggc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIGQ9J00wIDBsMyAzbTAtM0wwIDMnLyUzZSUzY2NpcmNsZSByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN5PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyBjeT0nMycgcj0nLjUnLyUzZSUzYy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxuICAgICksXG4gICAgXCJpbnZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgICApLFxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuXG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXG4kbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAgICAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgIGNhbGMoI3skZHJvcGRvd24tYm9yZGVyLXJhZGl1c30gLSAjeyRkcm9wZG93bi1ib3JkZXItd2lkdGh9KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICRuYXYtZGl2aWRlci1tYXJnaW4teSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIGRhcmtlbigkZ3JheS05MDAsIDUlKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cblxuLy8gSnVtYm90cm9uXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcblxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcblxuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XG5cbi8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gUG9wb3ZlcnNcblxuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNGVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcbiRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4vLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xuXG4kbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xuJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cblxuLy8gRmlndXJlc1xuXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxuXG5cbi8vIFNwaW5uZXJzXG5cbiRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xuXG4kc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xuXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XG5cblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xuXG4ka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xuJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcblxuXG4vLyBVdGlsaXRpZXNcblxuJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xuJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xuJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XG5cblxuLy8gUHJpbnRpbmdcblxuJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XG4kcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xuIiwiLyogJGNvbG9yc1xuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubXktZHJvcC16b25lIHtcbiAgbWluLWhlaWdodDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IGRhc2hlZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5udi1maWxlLW92ZXIge1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG59XG5cbi5hbm90aGVyLWZpbGUtb3Zlci1jbGFzcyB7XG4gIGJvcmRlci1jb2xvcjogIzY2YmI2YTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/form/upload/upload.component.ts":
/*!*************************************************!*\
  !*** ./src/app/form/upload/upload.component.ts ***!
  \*************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);



const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
let UploadComponent = class UploadComponent {
    constructor() {
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: URL,
            isHTML5: true
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    fileOverAnother(e) {
        this.hasAnotherDropZoneOver = e;
    }
};
UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/upload/upload.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.scss */ "./src/app/form/upload/upload.component.scss")).default]
    })
], UploadComponent);



/***/ }),

/***/ "./src/app/form/validation/validation.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/form/validation/validation.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vdmFsaWRhdGlvbi92YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/form/validation/validation.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/form/validation/validation.component.ts ***!
  \*********************************************************/
/*! exports provided: ValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return ValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);




let ValidationComponent = class ValidationComponent {
    constructor() {
        this.num = 5;
    }
    ngOnInit() {
        const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        const certainPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].notEqualTo(password));
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: password,
            certainPassword: certainPassword
        });
    }
    onSubmit(form) {
        console.log(form);
    }
};
ValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./validation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/validation/validation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./validation.component.scss */ "./src/app/form/validation/validation.component.scss")).default]
    })
], ValidationComponent);



/***/ })

}]);
//# sourceMappingURL=form-form-module-es2015.js.map