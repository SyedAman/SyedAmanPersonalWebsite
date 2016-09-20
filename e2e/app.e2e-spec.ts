import { SyednashikamanPage } from './app.po';

describe('syednashikaman App', function() {
  let page: SyednashikamanPage;

  beforeEach(() => {
    page = new SyednashikamanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
