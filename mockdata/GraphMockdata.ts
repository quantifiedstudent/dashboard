import moment from "moment";

export const HeartRateStressMockData = {
    title: 'Heartrate correlated to stress',
    series: [
        {
            name: "Heartrate",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
            name: "Stress",
            data: [52, 12, 57, 12, 86, 42, 32, 34]
        }
    ],
    moments: [
        moment(new Date('2019-03-01')).format(),
        moment(new Date('2019-03-02')).format(),
        moment(new Date('2019-03-03')).format(),
        moment(new Date('2019-03-04')).format(),
        moment(new Date('2019-03-05')).format(),
        moment(new Date('2019-03-06')).format(),
        moment(new Date('2019-03-07')).format(),
        moment(new Date('2019-03-08')).format()]
}

export const PerformanceMockData = {
    title: 'Overall Performance',
    series: [
        {
            name: "Performance",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ],
    moments: [
        moment(new Date('2019-03-01')).format(),
        moment(new Date('2019-03-02')).format(),
        moment(new Date('2019-03-03')).format(),
        moment(new Date('2019-03-04')).format(),
        moment(new Date('2019-03-05')).format(),
        moment(new Date('2019-03-06')).format(),
        moment(new Date('2019-03-07')).format(),
        moment(new Date('2019-03-08')).format()
    ]
}

export const SleepTimeLineMockData = {
    title: 'Sleep this week',
    series: [
        {
            data: [
                {
                    x: 'Monday',
                    y: [
                        new Date(2020, 12, 2, 2).getTime(),
                        new Date(2020, 12, 2, 10).getTime(),
                    ]
                },
                {
                    x: 'Tuesday',
                    y: [
                        new Date(2020, 12, 3, 3).getTime(),
                        new Date(2020, 12, 3, 11).getTime(),
                    ]
                },
                {
                    x: 'Wednesday',
                    y: [
                        new Date(2020, 12, 4, 4).getTime(),
                        new Date(2020, 12, 4, 13).getTime(),
                    ]
                },
                {
                    x: 'Wednesday',
                    y: [
                        new Date(2020, 12, 4, 14).getTime(),
                        new Date(2020, 12, 4, 15).getTime(),
                    ]
                },
                {
                    x: 'Thursday',
                    y: [
                        new Date(2020, 12, 5, 1).getTime(),
                        new Date(2020, 12, 5, 10).getTime()
                    ]
                },
                {
                    x: 'Friday',
                    y: [
                        new Date(2020, 12, 6, 4).getTime(),
                        new Date(2020, 12, 6, 13).getTime()
                    ]
                },
                {
                    x: 'Saturday',
                    y: [
                        new Date(2020, 12, 7, 6).getTime(),
                        new Date(2020, 12, 7, 14).getTime()
                    ]
                },
                {
                    x: 'Sunday',
                    y: [
                        new Date(2020, 12, 8, 2).getTime(),
                        new Date(2020, 12, 8, 10).getTime(),
                    ]
                }
            ]
        }
    ]
}
