import { ActionType } from '../actions';

const initialState = {
  data: [
    {
      id: '7839278',
      status: 'In Attendance',
      companyName: 'Leeds Trinity',
      work: "Static Till Machinery, Changing Cubicle, Damaged",
      dateAgreement: "Agreed SLA Date: 19/11/2018 15:30"
    },
    {
      id: '213806',
      status: 'Pending Attendance',
      companyName: 'Wakesfield',
      work: "Static Till Machinery, Changing Cubicle, Damaged",
      dateAgreement: "Agreed SLA Date: 19/11/2018 15:30"
    },
    {
      id: '234234',
      status: 'In Attendance',
      companyName: 'Leeds Trinity',
      work: "Static Till Machinery, Changing Cubicle, Damaged",
      dateAgreement: "Agreed SLA Date: 19/11/2018 15:30"
    },
    {
      id: '234234',
      status: 'Pending Attendance',
      companyName: 'Leeds Trinity',
      work: "Static Till Machinery, Changing Cubicle, Damaged",
      dateAgreement: "Agreed SLA Date: 19/11/2018 15:30"
    },
    {
      id: '456456',
      status: 'In Attendance',
      companyName: 'Leeds Trinity',
      work: "Static Till Machinery, Changing Cubicle, Damaged",
      dateAgreement: "Agreed SLA Date: 19/11/2018 15:30"
    },
    {
      id: '768654',
      status: 'Attendnce Paused - no temp fix',
      companyName: 'Leeds Trinity',
      work: "Static Till Machinery, Changing Cubicle, Damaged",
      dateAgreement: "Agreed SLA Date: 19/11/2018 15:30"
    },
  ],
  subContractors: [
    { name: 'Charlie Deet', company: "Company X" },
    { name: 'John Deet', company: "Company Y" },
    { name: 'Nithen Deet', company: "Company Z" },
    { name: 'Charles Deet', company: "Company P" },
    { name: 'Charlie Deet', company: "Company A" },
    { name: 'Charlie Deet', company: "Company X" },
    { name: 'John Deet', company: "Company Y" },
    { name: 'Nithen Deet', company: "Company Z" },
    { name: 'Charles Deet', company: "Company P" },
    { name: 'Charlie Deet', company: "Company A" },

  ],
  jobs:[]
};

export default (state = initialState, action) => {
  switch (action.type) {

    case ActionType.JOBS:
      return { ...state, jobs: action.payload };



    default:
      return state;
  }
};
