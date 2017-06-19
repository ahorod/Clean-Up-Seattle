import { CleanUpSeattlePage } from './app.po';

describe('clean-up-seattle App', () => {
  let page: CleanUpSeattlePage;

  beforeEach(() => {
    page = new CleanUpSeattlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
