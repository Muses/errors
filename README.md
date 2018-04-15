
[![CircleCI](https://circleci.com/gh/Muses/errors/tree/master.svg?style=svg)](https://circleci.com/gh/Muses/errors/tree/master)

# Muses Errors Package

Common predefined error messages for HTTP based services.

## Installation

Install the package using npm: `npm install muses-errors`

## Usage

Load the module as usual: `var errors = require('muses-errors');`

### Basic Usage

```
var errors = require('muses-errors');

var error = new errors.Error('Some Error', 1);

error.message === 'Some Error'; // true
error.code === 1; // true
error instanceof errors.Error; // true
error instanceof Error; // true
```

### Predefined Errors

Muses Errors includes many predefined error types for common HTTP errors. They're organized into two error branches: `ClientError` for the 4xx error codes and `ServerError` for the 5xx error codes.

Example: Not Found (404)

```
var errors = require('muses-errors');

var error = errors.NotFound('Resource not found.');

error.code === 404; // true
error instanceof errors.NotFound; // true
error instanceof errors.ClientError; // true
error instanceof errors.Error; // true
error instanceof Error; // true

JSON.stringify(error); // {"name":"NotFound","message":"Resource not found.","code":404}
```

#### Predefined Client Errors

The client errors handle the 4xx range of HTTP status codes.

* ClientError
* BadRequest
* Unauthorized
* PaymentRequired
* Forbidden
* NotFound
* MethodNotAllowed
* NotAcceptable
* ProxyAuthenticationRequired
* RequestTimeout
* Conflict
* Gone
* LengthRequired
* PreconditionFailed
* RequestEntityTooLarge
* RequestUriTooLong
* UnsupportedMediaType
* RequestedRangeNotSatisfiable
* ExpectationFailed
* MisdirectedRequest
* UnprocessableEntity
* Locked
* FailedDependency
* UpgradeRequired
* PreconditionRequired
* TooManyRequests
* RequestHeaderFieldsTooLarge

### Predefined Server Errors

The client errors handle the 5xx range of HTTP status codes.

* ServerError
* InternalServerError
* NotImplemented
* BadGateway
* ServiceUnavailable
* GatewayTimeout
* HttpVersionNotSupported
* VariantAlsoNegotiates
* InsufficientStorage
* LoopDetected
* NotExtended
* NetworkAuthenticationRequired

## License

See [LICENSE.md](LICENSE.md)
