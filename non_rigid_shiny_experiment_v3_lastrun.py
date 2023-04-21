#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on April 21, 2023, at 21:02
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.4'
expName = 'non_rigid_shiny_experiment_v3'  # from the Builder filename that created this script
expInfo = {
    'participant': '',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\omeru\\Documents\\Omer_Repos\\Non_Rigid_DNN\\non_rigid_shiny_experiment_v3\\non_rigid_shiny_experiment_v3_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "exp_start_instruc" ---
welcome_text = visual.TextStim(win=win, name='welcome_text',
    text='Welcome to the experiment. On each trial, you will see two moving objects, one on each side of the screen. At the top of the screen will be two types of question. The questions will be either "which object looks more SHINY?" or "which object looks more SOFT?". You can look at both objects for as long as you like, then please click either the left or the right arrow key to indicate which object you think looks more glossy/matte.\n\nPress "Space" to continue',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# --- Initialize components for Routine "familiarization_0" ---
familiarization_shiny = visual.TextStim(win=win, name='familiarization_shiny',
    text='But first lets get familiarized with object types.\n\nNow you will see some SHINY objects\nShiny objects specularly reflect their environment. You will see some objects that reflecting natural enviromants or artifical noise environments.\n\nPress "Space" to continue',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
skip = keyboard.Keyboard()

# --- Initialize components for Routine "shiny_example" ---
# Run 'Begin Experiment' code from exampleType
example_type="SHINY"

skip_2 = keyboard.Keyboard()
skip_text = visual.TextStim(win=win, name='skip_text',
    text='',
    font='Open Sans',
    pos=(0, -0.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "full_blank" ---
blank_100ms = visual.TextStim(win=win, name='blank_100ms',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_Matte = visual.TextStim(win=win, name='text_Matte',
    text='Now you will see some MATTE objects. \nMatte objects dont reflect their enviroment, you can think them as objects that have painting on the surface. \n\nPress "Space" to continue',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
skip_matte = keyboard.Keyboard()

# --- Initialize components for Routine "shinyReminder" ---
remindText = visual.TextStim(win=win, name='remindText',
    text='Now, acutual experiment is starting. In this section of the experiment, the question will be "which object looks more SHINY?". You can look at both objects for as long as you like, then please click either the left or the right arrow key to indicate which object you think looks more SHINY. There are a total of 100 trials in this section. You should indicate your selection by clicking right/left arrow.\n\nPress "Space" to continue',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
skipShinyTrial = keyboard.Keyboard()

# --- Initialize components for Routine "trial" ---
# Run 'Begin Experiment' code from shiftListPy
def shift_list(liste):
    top=liste.pop()
    liste.insert(0,top)
    return liste
  
# Run 'Begin Experiment' code from select_row
#def combine_lists(a,b):
#    combined_list=shift_list(a)+shift_list(b)
#    return combined_list
#time_order=[0,2.4]
### Gloss List
i=0
n_repetition=0
j=[10,11,12,13,14,15,16,17,18,19]
### HIGH DECISION
high_decision_ind=[0,1,2,3,4,5,6,7,8,9]
low_decision_ind=[10,11,12,13,14,15,16,17,18,19]
shuffle(high_decision_ind)
shuffle(low_decision_ind)
## index selecter
targetPos=[(win.size[0]/4),-1*(win.size[0]/4)]

question_gloss = visual.TextStim(win=win, name='question_gloss',
    text='',
    font='Open Sans',
    pos=[0, 0.35], height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
response = keyboard.Keyboard()

# --- Initialize components for Routine "blank" ---
text = visual.TextStim(win=win, name='text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
# Run 'Begin Experiment' code from encode_data
feedback=""
accuracy=[]

# --- Initialize components for Routine "endOfExp" ---
endText = visual.TextStim(win=win, name='endText',
    text="Thank you, the experiment has finished.\n\nPress 'Q' to quit the experiment.\n\nIf you have further questions contact with omer.yildiran@ens.psl.eu\n",
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
endKey = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "exp_start_instruc" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
exp_start_instrucComponents = [welcome_text, key_resp]
for thisComponent in exp_start_instrucComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "exp_start_instruc" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome_text* updates
    if welcome_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_text.frameNStart = frameN  # exact frame index
        welcome_text.tStart = t  # local t and not account for scr refresh
        welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_text, 'tStartRefresh')  # time at next scr refresh
        welcome_text.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['y','n','left','right','space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp_start_instrucComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "exp_start_instruc" ---
for thisComponent in exp_start_instrucComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "exp_start_instruc" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "familiarization_0" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
skip.keys = []
skip.rt = []
_skip_allKeys = []
# keep track of which components have finished
familiarization_0Components = [familiarization_shiny, skip]
for thisComponent in familiarization_0Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "familiarization_0" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *familiarization_shiny* updates
    if familiarization_shiny.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
        # keep track of start time/frame for later
        familiarization_shiny.frameNStart = frameN  # exact frame index
        familiarization_shiny.tStart = t  # local t and not account for scr refresh
        familiarization_shiny.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(familiarization_shiny, 'tStartRefresh')  # time at next scr refresh
        familiarization_shiny.setAutoDraw(True)
    
    # *skip* updates
    waitOnFlip = False
    if skip.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
        # keep track of start time/frame for later
        skip.frameNStart = frameN  # exact frame index
        skip.tStart = t  # local t and not account for scr refresh
        skip.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(skip, 'tStartRefresh')  # time at next scr refresh
        skip.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(skip.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(skip.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if skip.status == STARTED and not waitOnFlip:
        theseKeys = skip.getKeys(keyList=['space'], waitRelease=False)
        _skip_allKeys.extend(theseKeys)
        if len(_skip_allKeys):
            skip.keys = _skip_allKeys[-1].name  # just the last key pressed
            skip.rt = _skip_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in familiarization_0Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "familiarization_0" ---
for thisComponent in familiarization_0Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "familiarization_0" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
shiny_adap_trials = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('glossy_examplar_objects.csv'),
    seed=None, name='shiny_adap_trials')
thisExp.addLoop(shiny_adap_trials)  # add the loop to the experiment
thisShiny_adap_trial = shiny_adap_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisShiny_adap_trial.rgb)
if thisShiny_adap_trial != None:
    for paramName in thisShiny_adap_trial:
        exec('{} = thisShiny_adap_trial[paramName]'.format(paramName))

for thisShiny_adap_trial in shiny_adap_trials:
    currentLoop = shiny_adap_trials
    # abbreviate parameter names if possible (e.g. rgb = thisShiny_adap_trial.rgb)
    if thisShiny_adap_trial != None:
        for paramName in thisShiny_adap_trial:
            exec('{} = thisShiny_adap_trial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "shiny_example" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from exampleType
    example_type="SHINY" if Glossiness=="shiny" else "MATTE"
     
    #if difficulty_index==11 and groundTruth=="shiny":
    if shiny_adap_trials.thisTrialN==9:
        durMatte=1000
        startSkipMatte=0.3
        stopSkipMatte=1000
    else:
        durMatte=0
        startSkipMatte=0.099
        stopSkipMatte=0.1
    shiny_ex_trials = visual.MovieStim3(
        win=win, name='shiny_ex_trials', units='pix',
        noAudio = True,
        filename=obj_dir,
        ori=0.0, pos=(0, 0), opacity=None,
        loop=True, anchor='center',
        size=[256,256],
        depth=-1.0,
        )
    skip_2.keys = []
    skip_2.rt = []
    _skip_2_allKeys = []
    skip_text.setText("It is a "+example_type + " object\n\nPress 'Space' to see next")
    # keep track of which components have finished
    shiny_exampleComponents = [shiny_ex_trials, skip_2, skip_text]
    for thisComponent in shiny_exampleComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "shiny_example" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *shiny_ex_trials* updates
        if shiny_ex_trials.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            shiny_ex_trials.frameNStart = frameN  # exact frame index
            shiny_ex_trials.tStart = t  # local t and not account for scr refresh
            shiny_ex_trials.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(shiny_ex_trials, 'tStartRefresh')  # time at next scr refresh
            shiny_ex_trials.setAutoDraw(True)
        if shiny_ex_trials.status == FINISHED:  # force-end the routine
            continueRoutine = False
        
        # *skip_2* updates
        waitOnFlip = False
        if skip_2.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
            # keep track of start time/frame for later
            skip_2.frameNStart = frameN  # exact frame index
            skip_2.tStart = t  # local t and not account for scr refresh
            skip_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(skip_2, 'tStartRefresh')  # time at next scr refresh
            skip_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(skip_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(skip_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if skip_2.status == STARTED and not waitOnFlip:
            theseKeys = skip_2.getKeys(keyList=['space'], waitRelease=False)
            _skip_2_allKeys.extend(theseKeys)
            if len(_skip_2_allKeys):
                skip_2.keys = _skip_2_allKeys[-1].name  # just the last key pressed
                skip_2.rt = _skip_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *skip_text* updates
        if skip_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            skip_text.frameNStart = frameN  # exact frame index
            skip_text.tStart = t  # local t and not account for scr refresh
            skip_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(skip_text, 'tStartRefresh')  # time at next scr refresh
            skip_text.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in shiny_exampleComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "shiny_example" ---
    for thisComponent in shiny_exampleComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    shiny_ex_trials.stop()
    # the Routine "shiny_example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "full_blank" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    skip_matte.keys = []
    skip_matte.rt = []
    _skip_matte_allKeys = []
    # keep track of which components have finished
    full_blankComponents = [blank_100ms, text_Matte, skip_matte]
    for thisComponent in full_blankComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "full_blank" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *blank_100ms* updates
        if blank_100ms.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            blank_100ms.frameNStart = frameN  # exact frame index
            blank_100ms.tStart = t  # local t and not account for scr refresh
            blank_100ms.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blank_100ms, 'tStartRefresh')  # time at next scr refresh
            blank_100ms.setAutoDraw(True)
        if blank_100ms.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > blank_100ms.tStartRefresh + 0.1-frameTolerance:
                # keep track of stop time/frame for later
                blank_100ms.tStop = t  # not accounting for scr refresh
                blank_100ms.frameNStop = frameN  # exact frame index
                blank_100ms.setAutoDraw(False)
        
        # *text_Matte* updates
        if text_Matte.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            text_Matte.frameNStart = frameN  # exact frame index
            text_Matte.tStart = t  # local t and not account for scr refresh
            text_Matte.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_Matte, 'tStartRefresh')  # time at next scr refresh
            text_Matte.setAutoDraw(True)
        if text_Matte.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_Matte.tStartRefresh + durMatte-frameTolerance:
                # keep track of stop time/frame for later
                text_Matte.tStop = t  # not accounting for scr refresh
                text_Matte.frameNStop = frameN  # exact frame index
                text_Matte.setAutoDraw(False)
        
        # *skip_matte* updates
        waitOnFlip = False
        if skip_matte.status == NOT_STARTED and tThisFlip >= startSkipMatte-frameTolerance:
            # keep track of start time/frame for later
            skip_matte.frameNStart = frameN  # exact frame index
            skip_matte.tStart = t  # local t and not account for scr refresh
            skip_matte.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(skip_matte, 'tStartRefresh')  # time at next scr refresh
            skip_matte.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(skip_matte.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(skip_matte.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if skip_matte.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > skip_matte.tStartRefresh + stopSkipMatte-frameTolerance:
                # keep track of stop time/frame for later
                skip_matte.tStop = t  # not accounting for scr refresh
                skip_matte.frameNStop = frameN  # exact frame index
                skip_matte.status = FINISHED
        if skip_matte.status == STARTED and not waitOnFlip:
            theseKeys = skip_matte.getKeys(keyList=['space'], waitRelease=False)
            _skip_matte_allKeys.extend(theseKeys)
            if len(_skip_matte_allKeys):
                skip_matte.keys = _skip_matte_allKeys[-1].name  # just the last key pressed
                skip_matte.rt = _skip_matte_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in full_blankComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "full_blank" ---
    for thisComponent in full_blankComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "full_blank" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'shiny_adap_trials'


# --- Prepare to start Routine "shinyReminder" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
skipShinyTrial.keys = []
skipShinyTrial.rt = []
_skipShinyTrial_allKeys = []
# keep track of which components have finished
shinyReminderComponents = [remindText, skipShinyTrial]
for thisComponent in shinyReminderComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "shinyReminder" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *remindText* updates
    if remindText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        remindText.frameNStart = frameN  # exact frame index
        remindText.tStart = t  # local t and not account for scr refresh
        remindText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(remindText, 'tStartRefresh')  # time at next scr refresh
        remindText.setAutoDraw(True)
    
    # *skipShinyTrial* updates
    waitOnFlip = False
    if skipShinyTrial.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
        # keep track of start time/frame for later
        skipShinyTrial.frameNStart = frameN  # exact frame index
        skipShinyTrial.tStart = t  # local t and not account for scr refresh
        skipShinyTrial.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(skipShinyTrial, 'tStartRefresh')  # time at next scr refresh
        skipShinyTrial.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(skipShinyTrial.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(skipShinyTrial.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if skipShinyTrial.status == STARTED and not waitOnFlip:
        theseKeys = skipShinyTrial.getKeys(keyList=['space'], waitRelease=False)
        _skipShinyTrial_allKeys.extend(theseKeys)
        if len(_skipShinyTrial_allKeys):
            skipShinyTrial.keys = _skipShinyTrial_allKeys[-1].name  # just the last key pressed
            skipShinyTrial.rt = _skipShinyTrial_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in shinyReminderComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "shinyReminder" ---
for thisComponent in shinyReminderComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "shinyReminder" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
gloss_trials = data.TrialHandler(nReps=5.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('glossy_exp_objects.csv'),
    seed=None, name='gloss_trials')
thisExp.addLoop(gloss_trials)  # add the loop to the experiment
thisGloss_trial = gloss_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisGloss_trial.rgb)
if thisGloss_trial != None:
    for paramName in thisGloss_trial:
        exec('{} = thisGloss_trial[paramName]'.format(paramName))

for thisGloss_trial in gloss_trials:
    currentLoop = gloss_trials
    # abbreviate parameter names if possible (e.g. rgb = thisGloss_trial.rgb)
    if thisGloss_trial != None:
        for paramName in thisGloss_trial:
            exec('{} = thisGloss_trial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "trial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from select_row
    #shuffler(time_order)
    shuffle(targetPos)
    if high_decision_ind[i]>10:
        block_type="MATTE?"
    else:
        block_type="SHINY?"
    question_gloss.setText("Which object is more "+block_type)
    high_gloss = visual.MovieStim3(
        win=win, name='high_gloss', units='pix',
        noAudio = True,
        filename=gloss_trials.trialList[high_decision_ind[i]]["obj_dir"],
        ori=0.0, pos=(targetPos[1], 0), opacity=None,
        loop=True, anchor='center',
        size=[256,256],
        depth=-4.0,
        )
    low_gloss = visual.MovieStim3(
        win=win, name='low_gloss', units='pix',
        noAudio = True,
        filename=gloss_trials.trialList[low_decision_ind[i]]["obj_dir"],
        ori=0.0, pos=(targetPos[0], 0), opacity=0.4,
        loop=True, anchor='center',
        size=[256,256],
        depth=-5.0,
        )
    response.keys = []
    response.rt = []
    _response_allKeys = []
    # keep track of which components have finished
    trialComponents = [question_gloss, high_gloss, low_gloss, response]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *question_gloss* updates
        if question_gloss.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_gloss.frameNStart = frameN  # exact frame index
            question_gloss.tStart = t  # local t and not account for scr refresh
            question_gloss.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_gloss, 'tStartRefresh')  # time at next scr refresh
            question_gloss.setAutoDraw(True)
        
        # *high_gloss* updates
        if high_gloss.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            high_gloss.frameNStart = frameN  # exact frame index
            high_gloss.tStart = t  # local t and not account for scr refresh
            high_gloss.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(high_gloss, 'tStartRefresh')  # time at next scr refresh
            high_gloss.setAutoDraw(True)
        
        # *low_gloss* updates
        if low_gloss.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            low_gloss.frameNStart = frameN  # exact frame index
            low_gloss.tStart = t  # local t and not account for scr refresh
            low_gloss.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(low_gloss, 'tStartRefresh')  # time at next scr refresh
            low_gloss.setAutoDraw(True)
        
        # *response* updates
        waitOnFlip = False
        if response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response.frameNStart = frameN  # exact frame index
            response.tStart = t  # local t and not account for scr refresh
            response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response, 'tStartRefresh')  # time at next scr refresh
            response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if response.status == STARTED and not waitOnFlip:
            theseKeys = response.getKeys(keyList=['left','right'], waitRelease=False)
            _response_allKeys.extend(theseKeys)
            if len(_response_allKeys):
                response.keys = _response_allKeys[-1].name  # just the last key pressed
                response.rt = _response_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial" ---
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from select_row
    ##### End of Routine
    ### Encode object directories
    #gloss_trials.addData('high_dec_dir',myDataGloss.listOfTrials[high_decision_id[i]]["obj_dir"])
    #gloss_trials.addData('low_dec_dir',myDataGloss.listOfTrials[high_decision_id[i]+10]["obj_dir"])
    
    gloss_trials.addData('high_dec_dir',gloss_trials.trialList[high_decision_ind[i]]["obj_dir"])
    gloss_trials.addData('low_dec_dir',gloss_trials.trialList[low_decision_ind[i]]["obj_dir"])
    gloss_trials.addData('groundTruth',gloss_trials.trialList[high_decision_ind[i]]["Glossiness"])
    #gloss_trials.addData('highDifficulty',gloss_trials.trialList[high_decision_ind[i]]["difficulty_index"])
    #gloss_trials.addData('lowDifficulty',gloss_trials.trialList[low_decision_ind[i]]["difficulty_index"])
    gloss_trials.addData('highly',gloss_trials.trialList[high_decision_ind[i]]["test_object"])
    gloss_trials.addData('lowInd',gloss_trials.trialList[low_decision_ind[i]]["test_object"])
    gloss_trials.addData('highDecision',gloss_trials.trialList[high_decision_ind[i]]["decisionNormalized"])
    gloss_trials.addData('lowDecision',gloss_trials.trialList[low_decision_ind[i]]["decisionNormalized"])
    gloss_trials.addData('deltaDecision',gloss_trials.trialList[high_decision_ind[i]]["decision_value_norm"]-gloss_trials.trialList[low_decision_ind[i]]["decision_value_norm"])
        
        
    gloss_trials.addData('actual_target_pos',"right" if targetPos[1]>0 else "left")
    
    
    
    high_gloss.stop()
    low_gloss.stop()
    # check responses
    if response.keys in ['', [], None]:  # No response was made
        response.keys = None
    gloss_trials.addData('response.keys',response.keys)
    if response.keys != None:  # we had a response
        gloss_trials.addData('response.rt', response.rt)
    # Run 'End Routine' code from shiftListePy
    i+=1
    if i==10:
        i=0
        n_repetition+=1
        #high_decision_id=shift_list(high_decision_ind)
        low_decision_ind=shift_list(low_decision_ind)
    
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "blank" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    blankComponents = [text]
    for thisComponent in blankComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "blank" ---
    while continueRoutine and routineTimer.getTime() < 0.1:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 0.1-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blankComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "blank" ---
    for thisComponent in blankComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from encode_data
    if targetPos[1]>0:
        if response.keys[-1]=='right':
            feedback="Doğru"
            accuracy.append(1)
            gloss_trials.addData('cor_preddnn', 1)
        elif response.keys[-1]=='left':
            feedback="Yanlış"
            accuracy.append(0)
            gloss_trials.addData('cor_preddnn', 0)
            
    elif targetPos[1]<0:
        if response.keys[-1]=='left':
            feedback="Doğru"
            accuracy.append(1)
            gloss_trials.addData('cor_preddnn', 1)
        elif response.keys[-1]=='right':
            feedback="Yanlış"
            accuracy.append(0)
            gloss_trials.addData('cor_preddnn', 0)
            
    
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-0.100000)
    thisExp.nextEntry()
    
# completed 5.0 repeats of 'gloss_trials'


# --- Prepare to start Routine "endOfExp" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
endKey.keys = []
endKey.rt = []
_endKey_allKeys = []
# keep track of which components have finished
endOfExpComponents = [endText, endKey]
for thisComponent in endOfExpComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "endOfExp" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *endText* updates
    if endText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        endText.frameNStart = frameN  # exact frame index
        endText.tStart = t  # local t and not account for scr refresh
        endText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(endText, 'tStartRefresh')  # time at next scr refresh
        endText.setAutoDraw(True)
    
    # *endKey* updates
    waitOnFlip = False
    if endKey.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        endKey.frameNStart = frameN  # exact frame index
        endKey.tStart = t  # local t and not account for scr refresh
        endKey.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(endKey, 'tStartRefresh')  # time at next scr refresh
        endKey.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(endKey.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(endKey.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if endKey.status == STARTED and not waitOnFlip:
        theseKeys = endKey.getKeys(keyList=['q'], waitRelease=False)
        _endKey_allKeys.extend(theseKeys)
        if len(_endKey_allKeys):
            endKey.keys = _endKey_allKeys[-1].name  # just the last key pressed
            endKey.rt = _endKey_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endOfExpComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "endOfExp" ---
for thisComponent in endOfExpComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "endOfExp" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
