import {Subject} from 'rxjs/Subject';
import {Exercise} from "./exercise.model";
/**
 * Created by yopt on 16/07/2019.
 */

export class TrainingService {
    exerciseChanged = new Subject<Exercise>();

    private availableExercise: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];

    private exercise: Exercise [] = [];

    private runningExercise: Exercise;

    getAvailableExercise() {
        return this.availableExercise.slice();
    }

    startExercise(selectedId: string){
        this.runningExercise = this.availableExercise.find(ex => ex.id === selectedId);
        this.exerciseChanged.next({ ...this.runningExercise });
    }

    getRunningExercise() {
        return {...this.runningExercise};
    }

    completeExercise() {
        this.exercise.push({ ...this.runningExercise, date: new Date(), state: 'complete' });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }
    cancelExercise(){

    }
}