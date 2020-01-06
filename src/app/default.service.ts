import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  CHARACTER = [
    { id: 1, name: 'Soldier' },
    { id: 2, name: 'Gamer' },
    { id: 3, name: 'Engineer' },
    { id: 4, name: 'Spy' },
    { id: 5, name: 'Robot' },
    { id: 6, name: 'Billionaire' },
    { id: 7, name: 'CEO' },
    { id: 8, name: 'Gambler' },
    { id: 9, name: 'Sumo' },
    { id: 10, name: 'Queen' }
  ];

  SETTINGS = [
    { id: 1, name: 'beach' },
    { id: 2, name: 'space' },
    { id: 3, name: 'Mount Rushmore' },
    { id: 4, name: 'stadium' },
    { id: 5, name: 'park' }
  ];

  number = Math.floor(Math.random() * Math.floor(100));

  ACTIVITIES = [
    { id: 1, name: 'running in a marathon' },
    { id: 2, name: 'doing ' + this.number + ' pushups' },
    { id: 3, name: 'creating ' + this.number + ' pictures' },
    { id: 4, name: 'punching ' + this.number + ' planks' },
    { id: 5, name: 'dancing' }
  ]; 

  constructor() { }
}

/* IMPROV TIME
Have you ever been to an improv show? One of the things they like to do is get the audience to give them characters, settings, and a scenario, and the performers will then perform a scene based off those criteria. Let’s make an app for that!
Day 1: Hard-coded console application

    At least 10 different character types (e.g., princess, construction worker, programmer on a deadline, etc.)
    At least 5 different settings (e.g., grocery store, Cardinals baseball game, Dunder Mifflin)
    At least 5 different activities (e.g., on a scavenger hunt, shopping, getting ready to propose)
    Print 2 characters, one setting, and one activity, each randomized, to console for each time program is run
    Keep it work-appropriate, but have fun! The more outlandish the characters, settings, and/or activities are, the more work you make your performers have to do (and that’s half the fun) */