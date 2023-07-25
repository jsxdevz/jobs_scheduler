import fs from 'fs';
import moment from 'moment';
import { SchedulerJobs } from '@/types/bree';
export const checkFileExists = async (filename: string) => {
    return new Promise((resolve) => {
        fs.access(filename, fs.constants.F_OK, (err) => {
            resolve(!err);
        });
    });
};
export const debugServiceJobs = async (job: SchedulerJobs) => {
    const nowDate = moment();
    const nowDatetime = nowDate;
    const jobDatetime = moment(job.datetime);
    let status = false;
    // Compare if they are the same minute
    const isSameMinute = nowDatetime.isSame(jobDatetime, 'minute');
    if (isSameMinute) {
        console.log(`[${job.name}] :: *** Working ***`, job.data);
        status = true;
    } else {
        if (nowDatetime.isBefore(jobDatetime)) {
            console.log(`[${job.name}] :: Waiting`);
        } else if (nowDatetime.isAfter(jobDatetime)) {
            console.log(`[${job.name}] :: Timelapse`);
        } else {
            console.log(`[${job.name}] :: OtherCase`);
        }
    }
    return status;
};
