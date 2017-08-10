import { AgmGoogleMapAppPage } from './app.po';

describe('agm-google-map-app App', () => {
  let page: AgmGoogleMapAppPage;

  beforeEach(() => {
    page = new AgmGoogleMapAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
