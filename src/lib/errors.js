/**
 * Stage 3: custom errors. Subclass Error, set `name`, and keep the original
 * failure in `cause` so its stack trace survives being re-thrown.
 */

export class AppError extends Error {
  constructor(message, { status = 500, code = 'INTERNAL', cause } = {}) {
    super(message, { cause });
    this.name = new.target.name;
    this.status = status;
    this.code = code;
  }

  toJSON() {
    return { error: { code: this.code, message: this.message } };
  }
}

export class ValidationError extends AppError {
  constructor(message, details = [], options = {}) {
    super(message, { status: 400, code: 'VALIDATION', ...options });
    this.details = details;
  }

  toJSON() {
    return { error: { code: this.code, message: this.message, details: this.details } };
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Not found') {
    super(message, { status: 404, code: 'NOT_FOUND' });
  }
}

/** Turn anything that was thrown into an AppError. */
export function toAppError(err) {
  if (err instanceof AppError) return err;
  if (err instanceof SyntaxError) {
    return new ValidationError('Request body is not valid JSON', [], { cause: err });
  }
  return new AppError('Internal server error', { cause: err });
}
