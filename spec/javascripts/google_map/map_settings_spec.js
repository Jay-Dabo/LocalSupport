describe('Maps settings', function() {

  it('expresses default settings', function() {

    expect(Settings.id).toBe('map-canvas');
    expect(Settings.zoom).toBe(12);

  });
});
