"use strict";
/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
exports.complete = () => {
    console.log("Completed execution of extension");
};
exports.documentCreatedNoMsg = () => {
    console.log("Document was created without a string, no processing is required");
};
exports.documentCreatedWithMsg = () => {
    console.log("Document was created with a string");
};
exports.documentDeleted = () => {
    console.log("Document was deleted, no processing is required");
};
exports.documentUpdatedChangedMsg = () => {
    console.log("Document was updated, string has changed");
};
exports.documentUpdatedDeletedMsg = () => {
    console.log("Document was updated, string was deleted");
};
exports.documentUpdatedNoMsg = () => {
    console.log("Document was updated, no string exists, no processing is required");
};
exports.documentUpdatedUnchangedMsg = () => {
    console.log("Document was updated, string has not changed, no processing is required");
};
exports.error = (err) => {
    console.error("Failed execution of extension", err);
};
exports.fieldNamesNotDifferent = () => {
    console.error("The `Message` and `Translations` field names must be different for this extension to function correctly");
};
exports.init = () => {
    console.log("Initializing extension with configuration", config_1.default);
};
exports.messageFieldNameIsTranslationPath = () => {
    console.error("The `Message` field name must not be the same as a `Translation` path for this extension to function correctly");
};
exports.start = () => {
    console.log("Started execution of extension with configuration", config_1.default);
};
exports.translateMsg = (msg, language) => {
    console.log(`Translating msg: '${msg}' into language(s): '${language}'`);
};
exports.translateMsgComplete = (msg, language) => {
    console.log(`Finished translating msg: '${msg}' into language(s): '${language}'`);
};
exports.translateMsgError = (msg, language, err) => {
    console.error(`Error when translating msg: '${msg}' into language(s): '${language}'`, err);
};
exports.translateMsgAllLanguages = (msg, languages) => {
    console.log(`Translating msg: '${msg}' into language(s): '${languages.join(",")}'`);
};
exports.translateMsgAllLanguagesComplete = (msg) => {
    console.log(`Finished translating msg: '${msg}'`);
};
exports.translateMsgAllLanguagesError = (msg, err) => {
    console.error(`Error when translating msg: '${msg}'`, err);
};
exports.updateDocument = (path) => {
    console.log(`Updating Cloud Firestore document: '${path}'`);
};
exports.updateDocumentComplete = (path) => {
    console.log(`Finished updating Cloud Firestore document: '${path}'`);
};