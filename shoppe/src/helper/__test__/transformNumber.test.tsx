import { TStyleUnit, transformToStyleValue } from '@helper/transformNumber';
import { faker } from '@faker-js/faker';

describe('testing transformNumber', () => {
  it('should be return number px when have props value number', () => {
    const randomValue = faker.datatype.number();

    const transformValue = transformToStyleValue(randomValue);

    expect(transformValue).toEqual(`${randomValue}px`);
  });

  it('should be return null when have props value undefined', () => {
    const transformValue = transformToStyleValue(undefined);

    expect(transformValue).toEqual(null);
  });

  it('should be return null when have props value null', () => {
    const transformValue = transformToStyleValue(null);

    expect(transformValue).toEqual(null);
  });

  it('should be return 100% when have props value full', () => {
    const transformValue = transformToStyleValue('full');

    expect(transformValue).toEqual('100%');
  });

  it('should be return 50% when have props value half', () => {
    const transformValue = transformToStyleValue('half');

    expect(transformValue).toEqual('50%');
  });

  it('should be return value unit when have props unit', () => {
    const randomValue = faker.datatype.number();
    const randomUnit: TStyleUnit = faker.helpers.arrayElement(['px', 'rem', '%', 'em']);

    const transformValue = transformToStyleValue(randomValue, randomUnit);

    expect(transformValue).toEqual(`${randomValue}${randomUnit}`);
  });

  it('should be return 100% when have props value full and unit', () => {
    const randomUnit: TStyleUnit = faker.helpers.arrayElement(['px', 'rem', '%', 'em']);

    const transformValue = transformToStyleValue('full', randomUnit);

    expect(transformValue).toEqual('100%');
  });
});
