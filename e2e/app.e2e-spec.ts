import { ReporteInternoPage } from './app.po';

describe('reporte-interno App', () => {
  let page: ReporteInternoPage;

  beforeEach(() => {
    page = new ReporteInternoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
