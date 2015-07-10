beforeEach(function () {
	jasmine.getFixtures().fixturesPath = '../../test';
	loadFixtures('index.html');
	console.log("path ",jasmine.getFixtures().fixturesPath);
});

describe("Button Click ", function() { //To ensure button click event
  it('should be able to click the button', function () {
		var spyEvent = spyOnEvent('.fg-button', 'click');
		$('.fg-button').click();
		expect(spyEvent).toHaveBeenTriggered();
	});

	it('should assure that email field is not empty', function () {
		expect('.fg-email').toHaveValue('text');
	});
});

describe("Email validation ", function() {
	it('should validate xyz@abc.com', function(){
		var result = isValid('xyz@abc.com');
		expect(result).toBe(true);  
	});

  it("should not validate xyz@abc",function(){  
    var result = isValid("xyz@abc");  
    expect(result).not.toBe(true);  
  });  
});

