import { SpotittudePage } from './app.po';

describe('spotittude App', () => {
  let page: SpotittudePage;

  beforeEach(() => {
    page = new SpotittudePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
