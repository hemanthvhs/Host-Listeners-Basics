HOSTLISTENERS
------------------------
Ref Links
-------------

https://medium.com/claritydesignsystem/four-ways-of-listening-to-dom-events-in-angular-part-1-event-binding-3ec7e9f51a1d

https://medium.com/claritydesignsystem/four-ways-of-listening-to-dom-events-in-angular-part-2-hostlistener-1b66d45b3e3d

https://stackblitz.com/edit/zone-detector-no-hostlistener-xkpmco?file=app%2Fclick-catcher.directive.ts


@HostListener is Angular’s decorator method that’s used for listening to DOM events on the host element 
of both component and attribute directives.
@HostListener sets the listeners once the directive is initialized and removes them automatically once 
the directive gets destroyed.
@HostListener catches and listens to events from children or nested elements when they bubble up to the 
host element. Moreover, you can listen to events on global elements, but you should do so sparingly for
performance reasons.


Note :

Wheneve a click is happened,
 
Scenario-1 :

<p (click) = onClick($event) > Click On Me ! </p>    // Here  onClick is the handler function 
						        $event -> event payload object ; which is passed as an argument to the onClick handler function

Now, in the component class you can access the event payload object

onClick(e : any) {
	console.log(e)          // outputs as MouseEvent
	console.log(e.target)   // Provides all the details about the element where click happened
}


Scenario-2 :

<p clickcatcher > Click On Me ! </p>     // clickcatcher -> attribute directive

Now, in the ClickCatcherDirecive ,

@HostListener('click', ['$event']) onClick(e : any) {

	console.log(e)		// outputs as MouseEvent
	console.log(e.target)   // Provides all the details about the element where click happened
}

Note : 
--------

In order to get the event payload object , we need to use ['$event'] & catch that in a function (eg : OnClick())

