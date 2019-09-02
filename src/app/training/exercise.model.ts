/**
 * Created by yopt on 16/07/2019.
 */
export interface Exercise {
    id: string;
    name: string;
    duration: number;
    calories: number;
    date?: Date;
    state?: 'complete' | 'cancelled' | null;
}