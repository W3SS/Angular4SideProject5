import { Angular4SideProject5Page } from './app.po';

describe('angular4-side-project5 App', () => {
  let page: Angular4SideProject5Page;

  beforeEach(() => {
    page = new Angular4SideProject5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
