import React, { useEffect, useState, useContext, useReducer, useCallback, useMemo } from 'react';
import { Header } from "./Header.js";
import { Menu } from "./Menu.js";
import { ConfigContext } from './App.js';
import SpeakerData from "./SpeakerData.js";
import SpeakerDetail from './SpeakerDetail.js';

const Speaker = ({}) => {
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);
    const [speakerList, dispatch] = useReducer(speakersReducer, []);
    const [isLoading, setIsLoading] = useState(true);
    const context = useContext(ConfigContext);

    // const [speakerList, setSpeakerList] = useState([]);

    function speakersReducer(state, action) {
        switch (action.type) {
            case "setSpeakerList": {
                return action.data;
            }
            default: return state;
        }
    }

    useEffect(() => {
        setIsLoading(true);
        new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 1000);
        }).then(() => {
            setIsLoading(false);
            const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
                return (speakingSaturday && sat) || (speakingSunday && sun);
            });
        
            dispatch({
                type: "setSpeakerList",
                data: speakerListServerFilter
            });
        });
        return () => {
            console.log('cleanup');
        }
    }, []);

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
    }

    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
    }

    const heartFavoriteHandler = useCallback((e, favoriteValue) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
        dispatch({
            type: favoriteValue === true ? "favorite" : "unfavorite",
            sessionId
        });
    }, []);

    const newSpeakerList = useMemo(() => speakerList
        .filter(
            ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort(function(a, b) {
            if (a.firstName < b.firstName) {
                return -1;
            }
            if (a.firstName > b.firstName) {
                return 1;
            }
            return 0;
        }), [speakingSaturday, speakingSunday, speakerList]);

    const speakerListFiltered = isLoading ? [] 
        : newSpeakerList;

    if(isLoading) return <div>Loading...</div>

    return (
        <div>
            <Header />
            <Menu />
            <div className='container'>
                <div className='btn-toolbar margintopbottom5 checkbox-bigger'>
                    {context.showSpeakerSpeakingDays === false ? null : (
                    <div className='hide'>
                        <div className='form-check-inline'>
                            <label className='form-check-label'>
                                <input type="checkbox" className='form-check-input'
                                       onChange={handleChangeSaturday}
                                       checked={speakingSaturday}
                                />Saturday Speakers
                            </label>
                        </div>
                        <div className='form-check-inline'>
                            <label className='form-check-label'>
                                <input type="checkbox" className='form-check-input'
                                       onChange={handleChangeSunday}
                                       checked={speakingSunday}
                                />Sunday Speakers
                            </label>
                        </div>
                    </div>
                    )}
                </div>
                <div className='row'>
                    <div className='card-deck'>
                        {speakerListFiltered.map(
                            ({id, firstName, lastName, bio, favorite}) => {
                                return (
                                    <SpeakerDetail 
                                        key={id} 
                                        id={id} 
                                        favorite={favorite} 
                                        onHeartFavoriteHandler={heartFavoriteHandler} 
                                        firstName={firstName} 
                                        lastName={lastName} 
                                        bio={bio}
                                    />
                                );
                            },
                        )};
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speaker;