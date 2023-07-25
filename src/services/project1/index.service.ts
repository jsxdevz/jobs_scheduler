import { SchedulerJobs } from '@/types/bree';
import { readFileSync, writeFile } from 'fs';

const getMockData = async (): Promise<SchedulerJobs[]> => {
    const file = `./src/data/mock-data.json`;
    const rawdata = readFileSync(file, 'utf8');
    const data = JSON.parse(rawdata) as SchedulerJobs[];
    return data;
};

export const json = async () => {
    try {
        const jobsData = await getMockData();
        const filePath = './src/tasks/project1.json';
        const jsonString = JSON.stringify(jobsData, null, 2);
        writeFile(filePath, jsonString, (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
            }
            console.log('JSON file created successfully:', filePath);
        });
    } catch (error) {
        console.error('Error writing JSON file:', error);
    }
};
