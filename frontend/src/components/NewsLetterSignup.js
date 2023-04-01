import classes from './NewsLetterSignup.module.css';
import {useFetcher} from "react-router-dom";
import {useEffect} from "react";

function NewsLetterSignup() {
    //페이지 이동 없이 해당 자리에서 그대로 제출도 가능해짐
    const fetcher = useFetcher();
    const {data, state} = fetcher;

    useEffect(() => {
        if(state === 'idle' && data?.message) window.alert(data.message);
    }, [data, state]);

    return (
        <fetcher.Form method="post" action={'/newsletter'} className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsLetterSignup;