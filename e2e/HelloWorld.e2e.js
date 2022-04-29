import {by, device, element, expect} from 'detox';

describe('Hello World', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render Hello correctly', async () => {
    await expect(element(by.label('Hello'))).toBeVisible()
  });

  it('should render World correctly', async () => {
    await element(by.label('NOTIFICATION')).tap()
    await expect(element(by.label('World'))).toBeVisible()
  });
});
