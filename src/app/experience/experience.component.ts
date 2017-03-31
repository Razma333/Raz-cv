import { Component } from '@angular/core';

@Component({
    selector: 'experience',
    templateUrl: '../app/experience/experience.component.html',
    styleUrls: ['../app/experience/experience.less']
})

export class ExperienceComponent {

    works: Object[] = [
        { year: '2017', company: 'MyPensya', description: 'I worked as a Frontend developer in a startup that deals with Pensions & Insurances.', techs: ['AngularJS - JavaScript', 'CSS - Less', 'HTML5', 'Grunt'] },
        { year: '2015-2016', company: 'XForex', description: 'Selling Trading Accounts for Stocks, Foreign Exchange and Commodities, to people from all over the world.' },
        { year: '2014-2015', company: 'Kosmetics Kiosks', description: 'I Worked for 8 months in selling cosmetics products using English & French languages.' },
        { year: '2013-2014', company: 'Original\'s', description: 'Started as a Shift Manager Then as a Store Manager.' },
        { year: '2011-2013', company: 'SantaFe', description: 'A Waiter and Bartender at SantaFe restaurant.' },
    ]
}