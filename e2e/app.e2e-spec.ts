import { Angularfire2AgradePage } from './app.po';

describe('angularfire2-agrade App', function() {
  let page: Angularfire2AgradePage;

  beforeEach(() => {
    page = new Angularfire2AgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
