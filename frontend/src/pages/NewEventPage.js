import EventForm from "../components/EventForm";
import {json, redirect} from "react-router-dom";

const NewEventPage = () => {

    return (
        <EventForm method={'post'}/>
    )
};

export default NewEventPage;

export const action = async ({request, params}) => {
    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }

    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });

    if(response.status === 422) {//입력을 잘못했을 경우
        return response;
    }

    if (!response.ok) {
        throw json(
            {message: 'Could not save event!'},
            {status: 500}
        )
    }

    return redirect('/events');
}