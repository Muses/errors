var MuError = require('muses-error');
var MuErrors = require('../index');

describe('MuErrors', function() {

  it('should be an object', function() {
    expect(typeof MuErrors).toEqual('object');
  });

  it('should have an Error method', function() {
    expect(typeof MuErrors.Error).toEqual('function');
  });

  it('should alias MuError to Error', function() {
    var error = MuErrors.Error();
    expect(error instanceof MuErrors.Error).toBe(true);
    expect(error instanceof MuError).toBe(true);
    expect(error instanceof Error).toBe(true);
  });

  it('should have ClientError error', function() {
    expect(typeof MuErrors.ClientError).toEqual('function');
    var error = new MuErrors.ClientError();
    expect(error.name).toEqual('ClientError');
    expect(error.message).toEqual('Client Error');
    expect(error instanceof MuErrors.ServerError).toBe(false);
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error instanceof MuErrors.Error).toBe(true);
    expect(error instanceof MuError).toBe(true);
    expect(error instanceof Error).toBe(true);
  });

  it('should have BadRequest error', function() {
    expect(typeof MuErrors.BadRequest).toEqual('function');
    var error = new MuErrors.BadRequest();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('BadRequest');
    expect(error.message).toEqual('Bad Request');
    expect(error.code).toEqual(400);
  });

  it('should have Unauthorized error', function() {
    expect(typeof MuErrors.Unauthorized).toEqual('function');
    var error = new MuErrors.Unauthorized();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('Unauthorized');
    expect(error.message).toEqual('Unauthorized');
    expect(error.code).toEqual(401);
  });

  it('should have PaymentRequired error', function() {
    expect(typeof MuErrors.PaymentRequired).toEqual('function');
    var error = new MuErrors.PaymentRequired();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('PaymentRequired');
    expect(error.message).toEqual('Payment Required');
    expect(error.code).toEqual(402);
  });

  it('should have Forbidden error', function() {
    expect(typeof MuErrors.Forbidden).toEqual('function');
    var error = new MuErrors.Forbidden();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('Forbidden');
    expect(error.message).toEqual('Forbidden');
    expect(error.code).toEqual(403);
  });

  it('should have NotFound error', function() {
    expect(typeof MuErrors.NotFound).toEqual('function');
    var error = new MuErrors.NotFound();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('NotFound');
    expect(error.message).toEqual('Not Found');
    expect(error.code).toEqual(404);
  });

  it('should have MethodNotAllowed error', function() {
    expect(typeof MuErrors.MethodNotAllowed).toEqual('function');
    var error = new MuErrors.MethodNotAllowed();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('MethodNotAllowed');
    expect(error.message).toEqual('Method Not Allowed');
    expect(error.code).toEqual(405);
  });

  it('should have NotAcceptable error', function() {
    expect(typeof MuErrors.NotAcceptable).toEqual('function');
    var error = new MuErrors.NotAcceptable();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('NotAcceptable');
    expect(error.message).toEqual('Not Acceptable');
    expect(error.code).toEqual(406);
  });

  it('should have ProxyAuthenticationRequired error', function() {
    expect(typeof MuErrors.ProxyAuthenticationRequired).toEqual('function');
    var error = new MuErrors.ProxyAuthenticationRequired();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('ProxyAuthenticationRequired');
    expect(error.message).toEqual('Proxy Authentication Required');
    expect(error.code).toEqual(407);
  });

  it('should have RequestTimeout error', function() {
    expect(typeof MuErrors.RequestTimeout).toEqual('function');
    var error = new MuErrors.RequestTimeout();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('RequestTimeout');
    expect(error.message).toEqual('Request Timeout');
    expect(error.code).toEqual(408);
  });

  it('should have Conflict error', function() {
    expect(typeof MuErrors.Conflict).toEqual('function');
    var error = new MuErrors.Conflict();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('Conflict');
    expect(error.message).toEqual('Conflict');
    expect(error.code).toEqual(409);
  });

  it('should have Gone error', function() {
    expect(typeof MuErrors.Gone).toEqual('function');
    var error = new MuErrors.Gone();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('Gone');
    expect(error.message).toEqual('Gone');
    expect(error.code).toEqual(410);
  });

  it('should have LengthRequired error', function() {
    expect(typeof MuErrors.LengthRequired).toEqual('function');
    var error = new MuErrors.LengthRequired();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('LengthRequired');
    expect(error.message).toEqual('Length Required');
    expect(error.code).toEqual(411);
  });

  it('should have PreconditionFailed error', function() {
    expect(typeof MuErrors.PreconditionFailed).toEqual('function');
    var error = new MuErrors.PreconditionFailed();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('PreconditionFailed');
    expect(error.message).toEqual('Precondition Failed');
    expect(error.code).toEqual(412);
  });

  it('should have RequestEntityTooLarge error', function() {
    expect(typeof MuErrors.RequestEntityTooLarge).toEqual('function');
    var error = new MuErrors.RequestEntityTooLarge();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('RequestEntityTooLarge');
    expect(error.message).toEqual('Request Entity Too Large');
    expect(error.code).toEqual(413);
  });

  it('should have RequestUriTooLong error', function() {
    expect(typeof MuErrors.RequestUriTooLong).toEqual('function');
    var error = new MuErrors.RequestUriTooLong();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('RequestUriTooLong');
    expect(error.message).toEqual('Request URI Too Long');
    expect(error.code).toEqual(414);
  });

  it('should have UnsupportedMediaType error', function() {
    expect(typeof MuErrors.UnsupportedMediaType).toEqual('function');
    var error = new MuErrors.UnsupportedMediaType();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('UnsupportedMediaType');
    expect(error.message).toEqual('Unsupported Media Type');
    expect(error.code).toEqual(415);
  });

  it('should have RequestedRangeNotSatisfiable error', function() {
    expect(typeof MuErrors.RequestedRangeNotSatisfiable).toEqual('function');
    var error = new MuErrors.RequestedRangeNotSatisfiable();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('RequestedRangeNotSatisfiable');
    expect(error.message).toEqual('Requested Range Not Satisfiable');
    expect(error.code).toEqual(416);
  });

  it('should have ExpectationFailed error', function() {
    expect(typeof MuErrors.ExpectationFailed).toEqual('function');
    var error = new MuErrors.ExpectationFailed();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('ExpectationFailed');
    expect(error.message).toEqual('Expectation Failed');
    expect(error.code).toEqual(417);
  });

  it('should have MisdirectedRequest error', function() {
    expect(typeof MuErrors.MisdirectedRequest).toEqual('function');
    var error = new MuErrors.MisdirectedRequest();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('MisdirectedRequest');
    expect(error.message).toEqual('Misdirected Request');
    expect(error.code).toEqual(421);
  });

  it('should have UnprocessableEntity error', function() {
    expect(typeof MuErrors.UnprocessableEntity).toEqual('function');
    var error = new MuErrors.UnprocessableEntity();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('UnprocessableEntity');
    expect(error.message).toEqual('Unprocessable Entity');
    expect(error.code).toEqual(422);
  });

  it('should have Locked error', function() {
    expect(typeof MuErrors.Locked).toEqual('function');
    var error = new MuErrors.Locked();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('Locked');
    expect(error.message).toEqual('Locked');
    expect(error.code).toEqual(423);
  });

  it('should have UpgradeRequired error', function() {
    expect(typeof MuErrors.UpgradeRequired).toEqual('function');
    var error = new MuErrors.UpgradeRequired();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('UpgradeRequired');
    expect(error.message).toEqual('Upgrade Required');
    expect(error.code).toEqual(426);
  });

  it('should have PreconditionRequired error', function() {
    expect(typeof MuErrors.PreconditionRequired).toEqual('function');
    var error = new MuErrors.PreconditionRequired();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('PreconditionRequired');
    expect(error.message).toEqual('Precondition Required');
    expect(error.code).toEqual(428);
  });

  it('should have TooManyRequests error', function() {
    expect(typeof MuErrors.TooManyRequests).toEqual('function');
    var error = new MuErrors.TooManyRequests();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('TooManyRequests');
    expect(error.message).toEqual('Too Many Requests');
    expect(error.code).toEqual(429);
  });

  it('should have RequestHeaderFieldsTooLarge error', function() {
    expect(typeof MuErrors.RequestHeaderFieldsTooLarge).toEqual('function');
    var error = new MuErrors.RequestHeaderFieldsTooLarge();
    expect(error instanceof MuErrors.ClientError).toBe(true);
    expect(error.name).toEqual('RequestHeaderFieldsTooLarge');
    expect(error.message).toEqual('Request Header Fields Too Large');
    expect(error.code).toEqual(431);
  });

  it('should have ServerError error', function() {
    expect(typeof MuErrors.ServerError).toEqual('function');
    var error = new MuErrors.ServerError();
    expect(error.name).toEqual('ServerError');
    expect(error.message).toEqual('Server Error');
    expect(error instanceof MuErrors.ClientError).toBe(false);
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error instanceof MuErrors.Error).toBe(true);
    expect(error instanceof MuError).toBe(true);
    expect(error instanceof Error).toBe(true);
  });

  it('should have InternalServerError error', function() {
    expect(typeof MuErrors.InternalServerError).toEqual('function');
    var error = new MuErrors.InternalServerError();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('InternalServerError');
    expect(error.message).toEqual('Internal Server Error');
    expect(error.code).toEqual(500);
  });

  it('should have NotImplemented error', function() {
    expect(typeof MuErrors.NotImplemented).toEqual('function');
    var error = new MuErrors.NotImplemented();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('NotImplemented');
    expect(error.message).toEqual('Not Implemented');
    expect(error.code).toEqual(501);
  });

  it('should have BadGateway error', function() {
    expect(typeof MuErrors.BadGateway).toEqual('function');
    var error = new MuErrors.BadGateway();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('BadGateway');
    expect(error.message).toEqual('Bad Gateway');
    expect(error.code).toEqual(502);
  });

  it('should have ServiceUnavailable error', function() {
    expect(typeof MuErrors.ServiceUnavailable).toEqual('function');
    var error = new MuErrors.ServiceUnavailable();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('ServiceUnavailable');
    expect(error.message).toEqual('Service Unavailable');
    expect(error.code).toEqual(503);
  });

  it('should have GatewayTimeout error', function() {
    expect(typeof MuErrors.GatewayTimeout).toEqual('function');
    var error = new MuErrors.GatewayTimeout();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('GatewayTimeout');
    expect(error.message).toEqual('Gateway Timeout');
    expect(error.code).toEqual(504);
  });

  it('should have HttpVersionNotSupported error', function() {
    expect(typeof MuErrors.HttpVersionNotSupported).toEqual('function');
    var error = new MuErrors.HttpVersionNotSupported();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('HttpVersionNotSupported');
    expect(error.message).toEqual('HTTP Version Not Supported');
    expect(error.code).toEqual(505);
  });

  it('should have VariantAlsoNegotiates error', function() {
    expect(typeof MuErrors.VariantAlsoNegotiates).toEqual('function');
    var error = new MuErrors.VariantAlsoNegotiates();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('VariantAlsoNegotiates');
    expect(error.message).toEqual('Variant Also Negotiates');
    expect(error.code).toEqual(506);
  });

  it('should have InsufficientStorage error', function() {
    expect(typeof MuErrors.InsufficientStorage).toEqual('function');
    var error = new MuErrors.InsufficientStorage();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('InsufficientStorage');
    expect(error.message).toEqual('Insufficient Storage');
    expect(error.code).toEqual(507);
  });

  it('should have LoopDetected error', function() {
    expect(typeof MuErrors.LoopDetected).toEqual('function');
    var error = new MuErrors.LoopDetected();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('LoopDetected');
    expect(error.message).toEqual('Loop Detected');
    expect(error.code).toEqual(508);
  });

  it('should have NotExtended error', function() {
    expect(typeof MuErrors.NotExtended).toEqual('function');
    var error = new MuErrors.NotExtended();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('NotExtended');
    expect(error.message).toEqual('Not Extended');
    expect(error.code).toEqual(510);
  });

  it('should have NetworkAuthenticationRequired error', function() {
    expect(typeof MuErrors.NetworkAuthenticationRequired).toEqual('function');
    var error = new MuErrors.NetworkAuthenticationRequired();
    expect(error instanceof MuErrors.ServerError).toBe(true);
    expect(error.name).toEqual('NetworkAuthenticationRequired');
    expect(error.message).toEqual('Network Authentication Required');
    expect(error.code).toEqual(511);
  });
});
