/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

ace.define('ace/theme/kuroir', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-kuroir";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 467560D0-6ACE-4409-82FD-4791420837AC) */\
.ace-kuroir .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-kuroir .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-kuroir {\
background-color: #E8E9E8;\
color: #363636;\
}\
.ace-kuroir .ace_cursor {\
color: #202020;\
}\
.ace-kuroir .ace_marker-layer .ace_selection {\
background: rgba(245, 170, 0, 0.57);\
}\
.ace-kuroir.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #E8E9E8;\
border-radius: 2px;\
}\
.ace-kuroir .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-kuroir .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(0, 0, 0, 0.29);\
}\
.ace-kuroir .ace_marker-layer .ace_active-line {\
background: rgba(203, 220, 47, 0.22);\
}\
.ace-kuroir .ace_gutter-active-line {\
background-color: rgba(203, 220, 47, 0.22);\
}\
.ace-kuroir .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(245, 170, 0, 0.57);\
}\
.ace-kuroir .ace_fold {\
border-color: #363636;\
}\
.ace-kuroir .ace_constant{color:#CD6839;}.ace-kuroir .ace_constant.ace_numeric{color:#9A5925;}.ace-kuroir .ace_support{color:#104E8B;}.ace-kuroir .ace_support.ace_function{color:#005273;}.ace-kuroir .ace_support.ace_constant{color:#CF6A4C;}.ace-kuroir .ace_storage{color:#A52A2A;}.ace-kuroir .ace_invalid.ace_illegal{color:#FD1224;\
background-color:rgba(255, 6, 0, 0.15);}.ace-kuroir .ace_invalid.ace_deprecated{text-decoration:underline;\
font-style:italic;\
color:#FD1732;\
background-color:#E8E9E8;}.ace-kuroir .ace_string{color:#639300;}.ace-kuroir .ace_string.ace_regexp{color:#417E00;\
background-color:#C9D4BE;}.ace-kuroir .ace_comment{color:rgba(148, 148, 148, 0.91);\
background-color:rgba(220, 220, 220, 0.56);}.ace-kuroir .ace_variable{color:#009ACD;}.ace-kuroir .ace_meta.ace_tag{color:#005273;}.ace-kuroir .ace_markup.ace_heading{color:#B8012D;\
background-color:rgba(191, 97, 51, 0.051);}.ace-kuroir .ace_markup.ace_list{color:#8F5B26;}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
