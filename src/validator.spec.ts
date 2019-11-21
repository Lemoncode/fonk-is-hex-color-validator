import { setErrorMessage, validator } from './validator';

describe('fonk-is-hex-color-validator specs', () => {
  it('should return succeeded validation when value equals #1f1f1f', () => {
    const value = '#1f1f1f';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return succeeded validation when value equals #AFAFAF', () => {
    const value = '#AFAFAF';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return succeeded validation when value equals #1AFFa1', () => {
    const value = '#1AFFa1';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return succeeded validation when value equals #222fff', () => {
    const value = '#222fff';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return succeeded validation when value equals #F00', () => {
    const value = '#F00';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return succeeded validation when it feeds value equals undefined', () => {
    const value = void 0;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    const value = null;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    const value = '';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value is an integer', () => {
    const value = 123;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value is a string', () => {
    const value = 'test';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value equals #afafah', () => {
    const value = '#afafah';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value equals #123abce', () => {
    const value = '#123abce';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value equals aFaE3f ', () => {
    const value = 'aFaE3f';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value equals F00', () => {
    const value = 'F00';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value equals #afaf', () => {
    const value = '#afaf';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value equals #F0h', () => {
    const value = '#F0h';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value equals false', () => {
    const value = false;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should return failed validation when value equals true', () => {
    const value = true;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'Provided value is not a valid hexadecimal color',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    const value = 'test';
    const message = 'other message';

    const result = validator({ value, message });

    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'IS_HEX_COLOR',
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    const value = 'test';

    setErrorMessage('other message');

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'IS_HEX_COLOR',
    });
  });
});
