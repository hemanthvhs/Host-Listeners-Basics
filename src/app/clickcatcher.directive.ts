import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[clickCatcher]'
})

export class ClickCatcherDirective {


@HostListener('click', ['$event']) onClicks(e) {
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)   // gives the id of the html element where this clickcatcher directive is added as attribute
    alert('Paragraph with id: '+ e.target.id + ' is clicked')
}

/* 
        Another way of implementing the same HostListener

        @HostListener('click',['$event.target.id']) onClick(paraid : string) {
            alert ('Paragraph with id:'+ paraid + 'is clicked')
        }

        Note : Here event payload object is sending only id of the element to OnClick handler function
*/

}


/* 

Note :

Inorder to get the event payload object in Host Listener you need to provide like this

        @HostListener('click',['$event'])

@HostListener is Angular’s decorator method that’s used for listening to DOM events on the host element 
of both component and attribute directives.
@HostListener sets the listeners once the directive is initialized and removes them automatically once 
the directive gets destroyed.
@HostListener catches and listens to events from children or nested elements when they bubble up to the 
host element. Moreover, you can listen to events on global elements, but you should do so sparingly for
performance reasons.
*/