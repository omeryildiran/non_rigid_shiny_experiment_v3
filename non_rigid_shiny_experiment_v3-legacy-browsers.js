/************************************** 
 * Non_Rigid_Shiny_Experiment_V3 Test *
 **************************************/


// store info about the experiment session:
let expName = 'non_rigid_shiny_experiment_v3';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(exp_start_instrucRoutineBegin());
flowScheduler.add(exp_start_instrucRoutineEachFrame());
flowScheduler.add(exp_start_instrucRoutineEnd());
flowScheduler.add(familiarization_0RoutineBegin());
flowScheduler.add(familiarization_0RoutineEachFrame());
flowScheduler.add(familiarization_0RoutineEnd());
const shiny_adap_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(shiny_adap_trialsLoopBegin(shiny_adap_trialsLoopScheduler));
flowScheduler.add(shiny_adap_trialsLoopScheduler);
flowScheduler.add(shiny_adap_trialsLoopEnd);
flowScheduler.add(shinyReminderRoutineBegin());
flowScheduler.add(shinyReminderRoutineEachFrame());
flowScheduler.add(shinyReminderRoutineEnd());
const gloss_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(gloss_trialsLoopBegin(gloss_trialsLoopScheduler));
flowScheduler.add(gloss_trialsLoopScheduler);
flowScheduler.add(gloss_trialsLoopEnd);
flowScheduler.add(endOfExpRoutineBegin());
flowScheduler.add(endOfExpRoutineEachFrame());
flowScheduler.add(endOfExpRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'validationSet_v7_movies/366.mp4', 'path': 'validationSet_v7_movies/366.mp4'},
    {'name': 'validationSet_v7_movies/294.mp4', 'path': 'validationSet_v7_movies/294.mp4'},
    {'name': 'validationSet_v7_movies/67.mp4', 'path': 'validationSet_v7_movies/67.mp4'},
    {'name': 'validationSet_v7_movies/1.mp4', 'path': 'validationSet_v7_movies/1.mp4'},
    {'name': 'validationSet_v7_movies/120.mp4', 'path': 'validationSet_v7_movies/120.mp4'},
    {'name': 'validationSet_v7_movies/297.mp4', 'path': 'validationSet_v7_movies/297.mp4'},
    {'name': 'glossy_examplar_objects.csv', 'path': 'glossy_examplar_objects.csv'},
    {'name': 'validationSet_v7_movies/264.mp4', 'path': 'validationSet_v7_movies/264.mp4'},
    {'name': 'validationSet_v7_movies/156.mp4', 'path': 'validationSet_v7_movies/156.mp4'},
    {'name': 'validationSet_v7_movies/278.mp4', 'path': 'validationSet_v7_movies/278.mp4'},
    {'name': 'validationSet_v7_movies/198.mp4', 'path': 'validationSet_v7_movies/198.mp4'},
    {'name': 'validationSet_v7_movies/289.mp4', 'path': 'validationSet_v7_movies/289.mp4'},
    {'name': 'validationSet_v7_movies/23.mp4', 'path': 'validationSet_v7_movies/23.mp4'},
    {'name': 'validationSet_v7_movies/110.mp4', 'path': 'validationSet_v7_movies/110.mp4'},
    {'name': 'validationSet_v7_movies/28.mp4', 'path': 'validationSet_v7_movies/28.mp4'},
    {'name': 'validationSet_v7_movies/95.mp4', 'path': 'validationSet_v7_movies/95.mp4'},
    {'name': 'validationSet_v7_movies/276.mp4', 'path': 'validationSet_v7_movies/276.mp4'},
    {'name': 'validationSet_v7_movies/155.mp4', 'path': 'validationSet_v7_movies/155.mp4'},
    {'name': 'validationSet_v7_movies/235.mp4', 'path': 'validationSet_v7_movies/235.mp4'},
    {'name': 'validationSet_v7_movies/151.mp4', 'path': 'validationSet_v7_movies/151.mp4'},
    {'name': 'validationSet_v7_movies/126.mp4', 'path': 'validationSet_v7_movies/126.mp4'},
    {'name': 'validationSet_v7_movies/148.mp4', 'path': 'validationSet_v7_movies/148.mp4'},
    {'name': 'validationSet_v7_movies/283.mp4', 'path': 'validationSet_v7_movies/283.mp4'},
    {'name': 'validationSet_v7_movies/4.mp4', 'path': 'validationSet_v7_movies/4.mp4'},
    {'name': 'validationSet_v7_movies/281.mp4', 'path': 'validationSet_v7_movies/281.mp4'},
    {'name': 'validationSet_v7_movies/392.mp4', 'path': 'validationSet_v7_movies/392.mp4'},
    {'name': 'validationSet_v7_movies/178.mp4', 'path': 'validationSet_v7_movies/178.mp4'},
    {'name': 'validationSet_v7_movies/13.mp4', 'path': 'validationSet_v7_movies/13.mp4'},
    {'name': 'validationSet_v7_movies/298.mp4', 'path': 'validationSet_v7_movies/298.mp4'},
    {'name': 'validationSet_v7_movies/282.mp4', 'path': 'validationSet_v7_movies/282.mp4'},
    {'name': 'validationSet_v7_movies/85.mp4', 'path': 'validationSet_v7_movies/85.mp4'},
    {'name': 'validationSet_v7_movies/340.mp4', 'path': 'validationSet_v7_movies/340.mp4'},
    {'name': 'validationSet_v7_movies/188.mp4', 'path': 'validationSet_v7_movies/188.mp4'},
    {'name': 'validationSet_v7_movies/16.mp4', 'path': 'validationSet_v7_movies/16.mp4'},
    {'name': 'validationSet_v7_movies/311.mp4', 'path': 'validationSet_v7_movies/311.mp4'},
    {'name': 'validationSet_v7_movies/280.mp4', 'path': 'validationSet_v7_movies/280.mp4'},
    {'name': 'validationSet_v7_movies/25.mp4', 'path': 'validationSet_v7_movies/25.mp4'},
    {'name': 'glossy_exp_objects.csv', 'path': 'glossy_exp_objects.csv'},
    {'name': 'validationSet_v7_movies/159.mp4', 'path': 'validationSet_v7_movies/159.mp4'},
    {'name': 'validationSet_v7_movies/182.mp4', 'path': 'validationSet_v7_movies/182.mp4'},
    {'name': 'validationSet_v7_movies/22.mp4', 'path': 'validationSet_v7_movies/22.mp4'},
    {'name': 'validationSet_v7_movies/117.mp4', 'path': 'validationSet_v7_movies/117.mp4'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var exp_start_instrucClock;
var welcome_text;
var key_resp;
var shuffle;
var insert;
var familiarization_0Clock;
var familiarization_shiny;
var skip;
var shiny_exampleClock;
var example_type;
var skip_2;
var skip_text;
var full_blankClock;
var blank_100ms;
var text_Matte;
var skip_matte;
var shinyReminderClock;
var remindText;
var skipShinyTrial;
var trialClock;
var i;
var n_repetition;
var j;
var high_decision_ind;
var low_decision_ind;
var targetPos;
var question_gloss;
var response;
var blankClock;
var text;
var feedback;
var accuracy;
var endOfExpClock;
var endText;
var endKey;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "exp_start_instruc"
  exp_start_instrucClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Welcome to the experiment. On each trial, you will see two moving objects, one on each side of the screen. At the top of the screen will be two types of question. The questions will be either "which object looks more SHINY?" or "which object looks more SOFT?". You can look at both objects for as long as you like, then please click either the left or the right arrow key to indicate which object you think looks more glossy/matte.\n\nPress "Space" to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  shuffle = util.shuffle;
  insert= util.insert;
  // Initialize components for Routine "familiarization_0"
  familiarization_0Clock = new util.Clock();
  familiarization_shiny = new visual.TextStim({
    win: psychoJS.window,
    name: 'familiarization_shiny',
    text: 'But first lets get familiarized with object types.\n\nNow you will see some SHINY objects\nShiny objects specularly reflect their environment. You will see some objects that reflecting natural enviromants or artifical noise environments.\n\nPress "Space" to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  skip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "shiny_example"
  shiny_exampleClock = new util.Clock();
  // Run 'Begin Experiment' code from exampleType
  example_type = "SHINY";
  
  skip_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  skip_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'skip_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "full_blank"
  full_blankClock = new util.Clock();
  blank_100ms = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_100ms',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_Matte = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Matte',
    text: 'Now you will see some MATTE objects. \nMatte objects dont reflect their enviroment, you can think them as objects that have painting on the surface. \n\nPress "Space" to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  skip_matte = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "shinyReminder"
  shinyReminderClock = new util.Clock();
  remindText = new visual.TextStim({
    win: psychoJS.window,
    name: 'remindText',
    text: 'Now, acutual experiment is starting. In this section of the experiment, the question will be "which object looks more SHINY?". You can look at both objects for as long as you like, then please click either the left or the right arrow key to indicate which object you think looks more SHINY. There are a total of 100 trials in this section. You should indicate your selection by clicking right/left arrow.\n\nPress "Space" to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  skipShinyTrial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  function shiftList(liste) {
      var top;
      top = liste.pop();
      liste.unshift(top);
      return liste;
  }
  
  
  // Run 'Begin Experiment' code from select_row
  i = 0;
  n_repetition = 0;
  j = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  high_decision_ind = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  low_decision_ind = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  util.shuffle(high_decision_ind);
  util.shuffle(low_decision_ind);
  targetPos = [(psychoJS.window.size[0] / 4), ((- 1) * (psychoJS.window.size[0] / 4))];
  
  question_gloss = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_gloss',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from encode_data
  feedback = "";
  accuracy = [];
  
  // Initialize components for Routine "endOfExp"
  endOfExpClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: "Thank you, the experiment has finished.\n\nPress 'Q' to quit the experiment.\n\nIf you have further questions contact with omer.yildiran@ens.psl.eu\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  endKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var exp_start_instrucComponents;
function exp_start_instrucRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_start_instruc' ---
    t = 0;
    exp_start_instrucClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    exp_start_instrucComponents = [];
    exp_start_instrucComponents.push(welcome_text);
    exp_start_instrucComponents.push(key_resp);
    
    exp_start_instrucComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp_start_instrucRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_start_instruc' ---
    // get current time
    t = exp_start_instrucClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exp_start_instrucComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_start_instrucRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_start_instruc' ---
    exp_start_instrucComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp.stop();
    // the Routine "exp_start_instruc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _skip_allKeys;
var familiarization_0Components;
function familiarization_0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'familiarization_0' ---
    t = 0;
    familiarization_0Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skip.keys = undefined;
    skip.rt = undefined;
    _skip_allKeys = [];
    // keep track of which components have finished
    familiarization_0Components = [];
    familiarization_0Components.push(familiarization_shiny);
    familiarization_0Components.push(skip);
    
    familiarization_0Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function familiarization_0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'familiarization_0' ---
    // get current time
    t = familiarization_0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *familiarization_shiny* updates
    if (t >= 0.1 && familiarization_shiny.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      familiarization_shiny.tStart = t;  // (not accounting for frame time here)
      familiarization_shiny.frameNStart = frameN;  // exact frame index
      
      familiarization_shiny.setAutoDraw(true);
    }

    
    // *skip* updates
    if (t >= 0.1 && skip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip.tStart = t;  // (not accounting for frame time here)
      skip.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip.clearEvents(); });
    }

    if (skip.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip.getKeys({keyList: ['space'], waitRelease: false});
      _skip_allKeys = _skip_allKeys.concat(theseKeys);
      if (_skip_allKeys.length > 0) {
        skip.keys = _skip_allKeys[_skip_allKeys.length - 1].name;  // just the last key pressed
        skip.rt = _skip_allKeys[_skip_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    familiarization_0Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function familiarization_0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'familiarization_0' ---
    familiarization_0Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    skip.stop();
    // the Routine "familiarization_0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var shiny_adap_trials;
function shiny_adap_trialsLoopBegin(shiny_adap_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    shiny_adap_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'glossy_examplar_objects.csv',
      seed: undefined, name: 'shiny_adap_trials'
    });
    psychoJS.experiment.addLoop(shiny_adap_trials); // add the loop to the experiment
    currentLoop = shiny_adap_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    shiny_adap_trials.forEach(function() {
      snapshot = shiny_adap_trials.getSnapshot();
    
      shiny_adap_trialsLoopScheduler.add(importConditions(snapshot));
      shiny_adap_trialsLoopScheduler.add(shiny_exampleRoutineBegin(snapshot));
      shiny_adap_trialsLoopScheduler.add(shiny_exampleRoutineEachFrame());
      shiny_adap_trialsLoopScheduler.add(shiny_exampleRoutineEnd(snapshot));
      shiny_adap_trialsLoopScheduler.add(full_blankRoutineBegin(snapshot));
      shiny_adap_trialsLoopScheduler.add(full_blankRoutineEachFrame());
      shiny_adap_trialsLoopScheduler.add(full_blankRoutineEnd(snapshot));
      shiny_adap_trialsLoopScheduler.add(shiny_adap_trialsLoopEndIteration(shiny_adap_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function shiny_adap_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(shiny_adap_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function shiny_adap_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var gloss_trials;
function gloss_trialsLoopBegin(gloss_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    gloss_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'glossy_exp_objects.csv',
      seed: undefined, name: 'gloss_trials'
    });
    psychoJS.experiment.addLoop(gloss_trials); // add the loop to the experiment
    currentLoop = gloss_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    gloss_trials.forEach(function() {
      snapshot = gloss_trials.getSnapshot();
    
      gloss_trialsLoopScheduler.add(importConditions(snapshot));
      gloss_trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      gloss_trialsLoopScheduler.add(trialRoutineEachFrame());
      gloss_trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      gloss_trialsLoopScheduler.add(blankRoutineBegin(snapshot));
      gloss_trialsLoopScheduler.add(blankRoutineEachFrame());
      gloss_trialsLoopScheduler.add(blankRoutineEnd(snapshot));
      gloss_trialsLoopScheduler.add(gloss_trialsLoopEndIteration(gloss_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function gloss_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(gloss_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function gloss_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var durMatte;
var startSkipMatte;
var stopSkipMatte;
var shiny_ex_trialsClock;
var shiny_ex_trials;
var _skip_2_allKeys;
var shiny_exampleComponents;
function shiny_exampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'shiny_example' ---
    t = 0;
    shiny_exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from exampleType
    example_type = ((Glossiness === "shiny") ? "SHINY" : "MATTE");
    if ((shiny_adap_trials.thisTrialN === 9)) {
        durMatte = 1000;
        startSkipMatte = 0.3;
        stopSkipMatte = 1000;
    } else {
        durMatte = 0;
        startSkipMatte = 0.099;
        stopSkipMatte = 0.1;
    }
    
    shiny_ex_trialsClock = new util.Clock();
    shiny_ex_trials = new visual.MovieStim({
      win: psychoJS.window,
      name: 'shiny_ex_trials',
      units: 'pix',
      movie: obj_dir,
      pos: [0, 0],
      size: [256, 256],
      ori: 0.0,
      opacity: undefined,
      loop: true,
      noAudio: true,
      });
    skip_2.keys = undefined;
    skip_2.rt = undefined;
    _skip_2_allKeys = [];
    skip_text.setText((("It is a " + example_type) + " object\n\nPress 'Space' to see next"));
    // keep track of which components have finished
    shiny_exampleComponents = [];
    shiny_exampleComponents.push(shiny_ex_trials);
    shiny_exampleComponents.push(skip_2);
    shiny_exampleComponents.push(skip_text);
    
    shiny_exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function shiny_exampleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'shiny_example' ---
    // get current time
    t = shiny_exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *shiny_ex_trials* updates
    if (t >= 0 && shiny_ex_trials.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shiny_ex_trials.tStart = t;  // (not accounting for frame time here)
      shiny_ex_trials.frameNStart = frameN;  // exact frame index
      
      shiny_ex_trials.setAutoDraw(true);
      shiny_ex_trials.play();
    }

    if (shiny_ex_trials.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    
    // *skip_2* updates
    if (t >= 0.1 && skip_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_2.tStart = t;  // (not accounting for frame time here)
      skip_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip_2.clearEvents(); });
    }

    if (skip_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip_2.getKeys({keyList: ['space'], waitRelease: false});
      _skip_2_allKeys = _skip_2_allKeys.concat(theseKeys);
      if (_skip_2_allKeys.length > 0) {
        skip_2.keys = _skip_2_allKeys[_skip_2_allKeys.length - 1].name;  // just the last key pressed
        skip_2.rt = _skip_2_allKeys[_skip_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *skip_text* updates
    if (t >= 0.0 && skip_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_text.tStart = t;  // (not accounting for frame time here)
      skip_text.frameNStart = frameN;  // exact frame index
      
      skip_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    shiny_exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function shiny_exampleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'shiny_example' ---
    shiny_exampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    shiny_ex_trials.stop();
    skip_2.stop();
    // the Routine "shiny_example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _skip_matte_allKeys;
var full_blankComponents;
function full_blankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'full_blank' ---
    t = 0;
    full_blankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skip_matte.keys = undefined;
    skip_matte.rt = undefined;
    _skip_matte_allKeys = [];
    // keep track of which components have finished
    full_blankComponents = [];
    full_blankComponents.push(blank_100ms);
    full_blankComponents.push(text_Matte);
    full_blankComponents.push(skip_matte);
    
    full_blankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function full_blankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'full_blank' ---
    // get current time
    t = full_blankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank_100ms* updates
    if (t >= 0.0 && blank_100ms.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_100ms.tStart = t;  // (not accounting for frame time here)
      blank_100ms.frameNStart = frameN;  // exact frame index
      
      blank_100ms.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank_100ms.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank_100ms.setAutoDraw(false);
    }
    
    // *text_Matte* updates
    if (t >= 0 && text_Matte.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Matte.tStart = t;  // (not accounting for frame time here)
      text_Matte.frameNStart = frameN;  // exact frame index
      
      text_Matte.setAutoDraw(true);
    }

    frameRemains = 0 + durMatte - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_Matte.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_Matte.setAutoDraw(false);
    }
    
    // *skip_matte* updates
    if (t >= startSkipMatte && skip_matte.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_matte.tStart = t;  // (not accounting for frame time here)
      skip_matte.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip_matte.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip_matte.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip_matte.clearEvents(); });
    }

    frameRemains = startSkipMatte + stopSkipMatte - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (skip_matte.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      skip_matte.status = PsychoJS.Status.FINISHED;
  }

    if (skip_matte.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip_matte.getKeys({keyList: ['space'], waitRelease: false});
      _skip_matte_allKeys = _skip_matte_allKeys.concat(theseKeys);
      if (_skip_matte_allKeys.length > 0) {
        skip_matte.keys = _skip_matte_allKeys[_skip_matte_allKeys.length - 1].name;  // just the last key pressed
        skip_matte.rt = _skip_matte_allKeys[_skip_matte_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    full_blankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function full_blankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'full_blank' ---
    full_blankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    skip_matte.stop();
    // the Routine "full_blank" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _skipShinyTrial_allKeys;
var shinyReminderComponents;
function shinyReminderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'shinyReminder' ---
    t = 0;
    shinyReminderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skipShinyTrial.keys = undefined;
    skipShinyTrial.rt = undefined;
    _skipShinyTrial_allKeys = [];
    // keep track of which components have finished
    shinyReminderComponents = [];
    shinyReminderComponents.push(remindText);
    shinyReminderComponents.push(skipShinyTrial);
    
    shinyReminderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function shinyReminderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'shinyReminder' ---
    // get current time
    t = shinyReminderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *remindText* updates
    if (t >= 0.0 && remindText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      remindText.tStart = t;  // (not accounting for frame time here)
      remindText.frameNStart = frameN;  // exact frame index
      
      remindText.setAutoDraw(true);
    }

    
    // *skipShinyTrial* updates
    if (t >= 0.1 && skipShinyTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skipShinyTrial.tStart = t;  // (not accounting for frame time here)
      skipShinyTrial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skipShinyTrial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skipShinyTrial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skipShinyTrial.clearEvents(); });
    }

    if (skipShinyTrial.status === PsychoJS.Status.STARTED) {
      let theseKeys = skipShinyTrial.getKeys({keyList: ['space'], waitRelease: false});
      _skipShinyTrial_allKeys = _skipShinyTrial_allKeys.concat(theseKeys);
      if (_skipShinyTrial_allKeys.length > 0) {
        skipShinyTrial.keys = _skipShinyTrial_allKeys[_skipShinyTrial_allKeys.length - 1].name;  // just the last key pressed
        skipShinyTrial.rt = _skipShinyTrial_allKeys[_skipShinyTrial_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    shinyReminderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function shinyReminderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'shinyReminder' ---
    shinyReminderComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    skipShinyTrial.stop();
    // the Routine "shinyReminder" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block_type;
var high_glossClock;
var high_gloss;
var low_glossClock;
var low_gloss;
var _response_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from select_row
    util.shuffle(targetPos);
    if ((high_decision_ind[i] > 10)) {
        block_type = "MATTE?";
    } else {
        block_type = "SHINY?";
    }
    
    question_gloss.setText(("Which object is more " + block_type));
    high_glossClock = new util.Clock();
    high_gloss = new visual.MovieStim({
      win: psychoJS.window,
      name: 'high_gloss',
      units: 'pix',
      movie: gloss_trials.trialList[high_decision_ind[i]]["obj_dir"],
      pos: [targetPos[1], 0],
      size: [256, 256],
      ori: 0.0,
      opacity: undefined,
      loop: true,
      noAudio: true,
      });
    low_glossClock = new util.Clock();
    low_gloss = new visual.MovieStim({
      win: psychoJS.window,
      name: 'low_gloss',
      units: 'pix',
      movie: gloss_trials.trialList[low_decision_ind[i]]["obj_dir"],
      pos: [targetPos[0], 0],
      size: [256, 256],
      ori: 0.0,
      opacity: 0.4,
      loop: true,
      noAudio: true,
      });
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(question_gloss);
    trialComponents.push(high_gloss);
    trialComponents.push(low_gloss);
    trialComponents.push(response);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_gloss* updates
    if (t >= 0.0 && question_gloss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_gloss.tStart = t;  // (not accounting for frame time here)
      question_gloss.frameNStart = frameN;  // exact frame index
      
      question_gloss.setAutoDraw(true);
    }

    
    // *high_gloss* updates
    if (t >= 0 && high_gloss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      high_gloss.tStart = t;  // (not accounting for frame time here)
      high_gloss.frameNStart = frameN;  // exact frame index
      
      high_gloss.setAutoDraw(true);
      high_gloss.play();
    }

    
    // *low_gloss* updates
    if (t >= 0 && low_gloss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      low_gloss.tStart = t;  // (not accounting for frame time here)
      low_gloss.frameNStart = frameN;  // exact frame index
      
      low_gloss.setAutoDraw(true);
      low_gloss.play();
    }

    
    // *response* updates
    if (t >= 0.0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }

    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var top;
function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from select_row
    gloss_trials.addData("high_dec_dir", gloss_trials.trialList[high_decision_ind[i]]["obj_dir"]);
    gloss_trials.addData("low_dec_dir", gloss_trials.trialList[low_decision_ind[i]]["obj_dir"]);
    gloss_trials.addData("groundTruth", gloss_trials.trialList[high_decision_ind[i]]["Glossiness"]);
    gloss_trials.addData("highly", gloss_trials.trialList[high_decision_ind[i]]["test_object"]);
    gloss_trials.addData("lowInd", gloss_trials.trialList[low_decision_ind[i]]["test_object"]);
    gloss_trials.addData("highDecision", gloss_trials.trialList[high_decision_ind[i]]["decisionNormalized"]);
    gloss_trials.addData("lowDecision", gloss_trials.trialList[low_decision_ind[i]]["decisionNormalized"]);
    gloss_trials.addData("deltaDecision", (gloss_trials.trialList[high_decision_ind[i]]["decision_value_norm"] - gloss_trials.trialList[low_decision_ind[i]]["decision_value_norm"]));
    gloss_trials.addData("actual_target_pos", ((targetPos[1] > 0) ? "right" : "left"));
    
    high_gloss.stop();
    low_gloss.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        routineTimer.reset();
        }
    
    response.stop();
    i+=1;
    if ((i === 10)) {
        i = 0;
        n_repetition += 1;
        top = low_decision_ind.pop();
        low_decision_ind.unshift(top);
    }
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blankComponents;
function blankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank' ---
    t = 0;
    blankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.100000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blankComponents = [];
    blankComponents.push(text);
    
    blankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank' ---
    // get current time
    t = blankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank' ---
    blankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from encode_data
    if ((targetPos[1] > 0)) {
        if ((response.keys.slice((- 1))[0] === "right")) {
            feedback = "Do\u011fru";
            accuracy.push(1);
            gloss_trials.addData("cor_preddnn", 1);
        } else {
            if ((response.keys.slice((- 1))[0] === "left")) {
                feedback = "Yanl\u0131\u015f";
                accuracy.push(0);
                gloss_trials.addData("cor_preddnn", 0);
            }
        }
    } else {
        if ((targetPos[1] < 0)) {
            if ((response.keys.slice((- 1))[0] === "left")) {
                feedback = "Do\u011fru";
                accuracy.push(1);
                gloss_trials.addData("cor_preddnn", 1);
            } else {
                if ((response.keys.slice((- 1))[0] === "right")) {
                    feedback = "Yanl\u0131\u015f";
                    accuracy.push(0);
                    gloss_trials.addData("cor_preddnn", 0);
                }
            }
        }
    }
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _endKey_allKeys;
var endOfExpComponents;
function endOfExpRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endOfExp' ---
    t = 0;
    endOfExpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    endKey.keys = undefined;
    endKey.rt = undefined;
    _endKey_allKeys = [];
    // keep track of which components have finished
    endOfExpComponents = [];
    endOfExpComponents.push(endText);
    endOfExpComponents.push(endKey);
    
    endOfExpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endOfExpRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endOfExp' ---
    // get current time
    t = endOfExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }

    
    // *endKey* updates
    if (t >= 0.0 && endKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endKey.tStart = t;  // (not accounting for frame time here)
      endKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endKey.clearEvents(); });
    }

    if (endKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = endKey.getKeys({keyList: ['q'], waitRelease: false});
      _endKey_allKeys = _endKey_allKeys.concat(theseKeys);
      if (_endKey_allKeys.length > 0) {
        endKey.keys = _endKey_allKeys[_endKey_allKeys.length - 1].name;  // just the last key pressed
        endKey.rt = _endKey_allKeys[_endKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endOfExpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endOfExpRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endOfExp' ---
    endOfExpComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    endKey.stop();
    // the Routine "endOfExp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
