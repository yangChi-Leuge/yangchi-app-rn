import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Animated, Image } from "react-native";
import { Width } from "../../styles/demention.ts";

const EarthPlanet = ({ opacity = 1, types = false, start = false, isAnimated = false}: { opacity?: number; types?: boolean, start: boolean, isAnimated?: boolean }) => {
    const marginTopValue = useRef(new Animated.Value(types ? -250 : 505)).current;

    useEffect(() => {
        if(isAnimated) {
            if (start) {
                Animated.timing(marginTopValue, {
                    toValue: types ? -60 : 195,
                    duration: 1500,
                    useNativeDriver: false
                }).start();
            } else {
                Animated.timing(marginTopValue, {
                    toValue: types ? -150 : 405,
                    duration: 600,
                    useNativeDriver: false
                }).start();
            }
        } else {
            Animated.timing(marginTopValue, {
                toValue: types ? 0 : 255,
                duration: 10,
                useNativeDriver: false
            }).start();
        }
    }, [start]);



    return (
        <Animated.Image
            style={{
                position: "absolute",
                width: Width,
                height: 600,
                marginTop: marginTopValue,
                opacity,
            }}
            source={{ uri: types ? "https://i.ibb.co/w6Jw494/7644537-1-1.png" : "https://i.ibb.co/PwphHC0/7644537-1.png" }}
        />
    );
};

export default EarthPlanet;
