"use strict";

var MuError = require('muses-error');
var MuErrors = {};

// Alias MuError.
MuErrors.Error = MuError;

// HTTP status codes: http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

// HTTP client errors.
var ClientError = MuErrors.ClientError = MuError.extend('ClientError', 'Client Error');
MuErrors.BadRequest = ClientError.extend('BadRequest', 'Bad Request', 400);
MuErrors.Unauthorized = ClientError.extend('Unauthorized', 'Unauthorized', 401);
MuErrors.PaymentRequired = ClientError.extend('PaymentRequired', 'Payment Required', 402);
MuErrors.Forbidden = ClientError.extend('Forbidden', 'Forbidden', 403);
MuErrors.NotFound = ClientError.extend('NotFound', 'Not Found', 404);
MuErrors.MethodNotAllowed = ClientError.extend('MethodNotAllowed', 'Method Not Allowed', 405);
MuErrors.NotAcceptable = ClientError.extend('NotAcceptable', 'Not Acceptable', 406);
MuErrors.ProxyAuthenticationRequired = ClientError.extend('ProxyAuthenticationRequired', 'Proxy Authentication Required', 407);
MuErrors.RequestTimeout = ClientError.extend('RequestTimeout', 'Request Timeout', 408);
MuErrors.Conflict = ClientError.extend('Conflict', 'Conflict', 409);
MuErrors.Gone = ClientError.extend('Gone', 'Gone', 410);
MuErrors.LengthRequired = ClientError.extend('LengthRequired', 'Length Required', 411);
MuErrors.PreconditionFailed = ClientError.extend('PreconditionFailed', 'Precondition Failed', 412);
MuErrors.RequestEntityTooLarge = ClientError.extend('RequestEntityTooLarge', 'Request Entity Too Large', 413);
MuErrors.RequestUriTooLong = ClientError.extend('RequestUriTooLong', 'Request URI Too Long', 414);
MuErrors.UnsupportedMediaType = ClientError.extend('UnsupportedMediaType', 'Unsupported Media Type', 415);
MuErrors.RequestedRangeNotSatisfiable = ClientError.extend('RequestedRangeNotSatisfiable', 'Requested Range Not Satisfiable', 416);
MuErrors.ExpectationFailed = ClientError.extend('ExpectationFailed', 'Expectation Failed', 417);
MuErrors.MisdirectedRequest = ClientError.extend('MisdirectedRequest', 'Misdirected Request', 421);
MuErrors.UnprocessableEntity = ClientError.extend('UnprocessableEntity', 'Unprocessable Entity', 422);
MuErrors.Locked = ClientError.extend('Locked', 'Locked', 423);
MuErrors.FailedDependency = ClientError.extend('FailedDependency', 'Failed Dependency', 424);
MuErrors.UpgradeRequired = ClientError.extend('UpgradeRequired', 'Upgrade Required', 426);
MuErrors.PreconditionRequired = ClientError.extend('PreconditionRequired', 'Precondition Required', 428);
MuErrors.TooManyRequests = ClientError.extend('TooManyRequests', 'Too Many Requests', 429);
MuErrors.RequestHeaderFieldsTooLarge = ClientError.extend('RequestHeaderFieldsTooLarge', 'Request Header Fields Too Large', 431);

// HTTP server errors.
var ServerError = MuErrors.ServerError = MuError.extend('ServerError', 'Server Error');
MuErrors.InternalServerError = ServerError.extend('InternalServerError', 'Internal Server Error', 500);
MuErrors.NotImplemented = ServerError.extend('NotImplemented', 'Not Implemented', 501);
MuErrors.BadGateway = ServerError.extend('BadGateway', 'Bad Gateway', 502);
MuErrors.ServiceUnavailable = ServerError.extend('ServiceUnavailable', 'Service Unavailable', 503);
MuErrors.GatewayTimeout = ServerError.extend('GatewayTimeout', 'Gateway Timeout', 504);
MuErrors.HttpVersionNotSupported = ServerError.extend('HttpVersionNotSupported', 'HTTP Version Not Supported', 505);
MuErrors.VariantAlsoNegotiates = ServerError.extend('VariantAlsoNegotiates', 'Variant Also Negotiates', 506);
MuErrors.InsufficientStorage = ServerError.extend('InsufficientStorage', 'Insufficient Storage', 507);
MuErrors.LoopDetected = ServerError.extend('LoopDetected', 'Loop Detected', 508);
MuErrors.NotExtended = ServerError.extend('NotExtended', 'Not Extended', 510);
MuErrors.NetworkAuthenticationRequired = ServerError.extend('NetworkAuthenticationRequired', 'Network Authentication Required', 511);

// Exports.
module.exports = MuErrors;
