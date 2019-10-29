








// Preview details in the title 
// map to point location 
// can we find your current location ? 

// Calling api and logging details 



// Current weather to look like google current with forcast 

// <div class="vk_c card-section" id="wob_wc"><span aria-level="3" role="heading">
// <div class="vk_gy vk_h" id="wob_loc">Scarborough, ON M1H</div>
{/* <div class="vk_gy vk_sh" id="wob_dts">Monday 5:00 p.m.</div>
<div id="wob_dcp"><span class="vk_gy vk_sh" id="wob_dc">Sunny</span></div></span>
<div id="wob_d" style="font:16px arial,helvetica,sans-serif;padding:20px 0 0;-webkit-touch-callout:none;-webkit-user-select:none"><div>
<img style="float:left;height:64px;width:64px" alt="Sunny" src="//ssl.gstatic.com/onebox/weather/64/sunny.png" id="wob_tci" data-atf="1">
<div aria-level="3" role="heading" style="padding-left:10px;float:left">
<div>
<div class="vk_bk sol-tmp" style="float:left;margin-top:-3px;font-size:64px">
<span class="wob_t" id="wob_tm" style="display:inline">13</span><span class="wob_t" id="wob_ttm" style="display:none">56</span></div>
<div class="vk_bk wob-unit" style="float:left;font-size:16px;margin-top:6px">
<span class="wob_t" style="display:inline" aria-label="°Celsius" aria-disabled="true" role="button">°C</span>
<a class="wob_t" href="#" style="display:none;text-decoration:none" data-lams="" data-metric="true" data-url="/setprefs?fheit=0&amp;sig=0_LdarucbZYrtSXEM7_fIW8p7L1ro=&amp;prev=https://www.google.com/search%3Fsafe%3Dstrict%26rlz%3D1C5CHFA_enSA818SA818%26sxsrf%3DACYBGNTTOJRfGC1B0wJx9KdYNT8PyYExMQ:1572298933029%26ei%3DtWC3XdG0AY6-ggevw4-wBg%26q%3Dweather%26oq%3Dweather%26gs_l%3Dpsy-ab.3..0i71l8.16240.16240..16942...0.3..0.0.0.......0....1..gws-wiz.C8KPtlV7DNg%26ved%3D0ahUKEwiR44j79b_lAhUOn-AKHa_hA2YQ4dUDCAs%26uact%3D5" role="button" jsaction="wob.t" data-ved="2ahUKEwjH0L-K9r_lAhUCd98KHYFaANcQ-lswAHoECBYQAQ">
<span aria-label="°Celsius">°C</span></a>&nbsp;|&nbsp;<a class="wob_t" href="#" style="display:inline;text-decoration:none;margin-left:-1px" data-lams="" data-metric="false" data-url="/setprefs?fheit=1&amp;sig=0_LdarucbZYrtSXEM7_fIW8p7L1ro=&amp;prev=https://www.google.com/search%3Fsafe%3Dstrict%26rlz%3D1C5CHFA_enSA818SA818%26sxsrf%3DACYBGNTTOJRfGC1B0wJx9KdYNT8PyYExMQ:1572298933029%26ei%3DtWC3XdG0AY6-ggevw4-wBg%26q%3Dweather%26oq%3Dweather%26gs_l%3Dpsy-ab.3..0i71l8.16240.16240..16942...0.3..0.0.0.......0....1..gws-wiz.C8KPtlV7DNg%26ved%3D0ahUKEwiR44j79b_lAhUOn-AKHa_hA2YQ4dUDCAs%26uact%3D5" role="button" jsaction="wob.t" data-ved="2ahUKEwjH0L-K9r_lAhUCd98KHYFaANcQ-1swAHoECBYQAg">
    <span aria-label="°Fahrenheit">°F</span></a>    
<span class="wob_t" style="display:none;margin-left:-1px" aria-label="°Fahrenheit" aria-disabled="true" role="button">°F</span></div></div></div><div class="vk_gy vk_sh wob-dtl" style="float:right;padding-left:5px;line-height:22px;padding-top:2px;min-width:43%"><div>Precipitation: <span id="wob_pp">0%</span></div><div>Humidity: <span id="wob_hm">74%</span></div><div>Wind: <span><span class="wob_t" id="wob_ws">11 km/h</span><span class="wob_t" style="display:none" id="wob_tws">7 mph</span></span></div><div style="height:23px;overflow:hidden;padding:15px 0 9px">
<div class="ksb uE5Hoc ksbs" style="display:inline-block" aria-disabled="true" id="wob_temp" role="button" tabindex="0" data-ved="2ahUKEwjH0L-K9r_lAhUCd98KHYFaANcQs6MEMAB6BAgWEAM">Temperature</div><div class="ksb PXcN4c uE5Hoc" style="display:inline-block" aria-disabled="false" id="wob_rain" role="button" tabindex="0" data-ved="2ahUKEwjH0L-K9r_lAhUCd98KHYFaANcQsqMEMAB6BAgWEAQ">Precipitation</div><div class="ksb PXcN4c" style="display:inline-block" aria-disabled="false" id="wob_wind" role="button" tabindex="0" data-ved="2ahUKEwjH0L-K9r_lAhUCd98KHYFaANcQtKMEMAB6BAgWEAU">Wind</div></div></div></div>
</div><div style="clear:both"></div><div class="wob_tg gic" data-sd="0" data-sh="17" id="wob_gsp" style="height:120px;left:0;top:0;-webkit-tap-highlight-color:transparent">
<div class="vk_gy vk_sh" id="wob_nh" style="position:absolute;text-align:center;top:50%;width:100%;display:none">No hourly forecast available.</div><div id="wob_gs" style="margin-top: 10px; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px); transition: -webkit-transform 300ms ease-in-out 0s;"><svg style="height:80px;cursor:pointer" id="wob_gsvg" data-ved="2ahUKEwjH0L-K9r_lAhUCd98KHYFaANcQnaQEMAB6BAgWEAY" width="8232"><text aria-label="13°Celsius Monday 5:00 p.m." class="wob_t wob_gs_l0" style="font:bold 11px arial;text-anchor:middle" fill="#555" x="12" y="20" direction="ltr">13</text><text aria-label="56°Fahrenheit Monday 5:00 p.m." class="wob_t wob_gs_l0" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#555" x="12" y="20" direction="ltr">56</text><text aria-label="12°Celsius Monday 6:00 p.m." class="wob_t wob_gs_l1" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="36" y="24" direction="ltr"></text>
<text aria-label="54°Fahrenheit Monday 6:00 p.m." class="wob_t wob_gs_l1" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="36" y="24" direction="ltr"></text><text aria-label="11°Celsius Monday 7:00 p.m." class="wob_t wob_gs_l2" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="60" y="28" direction="ltr"></text><text aria-label="52°Fahrenheit Monday 7:00 p.m." class="wob_t wob_gs_l2" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="60" y="28" direction="ltr"></text><text aria-label="11°Celsius Monday 8:00 p.m." class="wob_t wob_gs_l3" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="84" y="28" direction="ltr">11</text><text aria-label="52°Fahrenheit Monday 8:00 p.m." class="wob_t wob_gs_l3" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="84" y="28" direction="ltr">52</text>
<text aria-label="10°Celsius Monday 9:00 p.m." class="wob_t wob_gs_l4" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="108" y="32" direction="ltr"></text><text aria-label="50°Fahrenheit Monday 9:00 p.m." class="wob_t wob_gs_l4" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="108" y="32" direction="ltr"></text><text aria-label="9°Celsius Monday 10:00 p.m." class="wob_t wob_gs_l5" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="132" y="34" direction="ltr"></text><text aria-label="49°Fahrenheit Monday 10:00 p.m." class="wob_t wob_gs_l5" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="132" y="34" direction="ltr"></text><text aria-label="9°Celsius Monday 11:00 p.m." class="wob_t wob_gs_l6" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="156" y="34" direction="ltr">9</text><text aria-label="49°Fahrenheit Monday 11:00 p.m." class="wob_t wob_gs_l6" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="156" y="34" direction="ltr">49</text>
<text aria-label="9°Celsius Tuesday 12:00 a.m." class="wob_t wob_gs_l7" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="180" y="36" direction="ltr"></text>
<text aria-label="48°Fahrenheit Tuesday 12:00 a.m." class="wob_t wob_gs_l7" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="180" y="36" direction="ltr"></text><text aria-label="9°Celsius Tuesday 1:00 a.m." class="wob_t wob_gs_l8" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="204" y="36" direction="ltr"></text><text aria-label="48°Fahrenheit Tuesday 1:00 a.m." class="wob_t wob_gs_l8" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="204" y="36" direction="ltr"></text><text aria-label="8°Celsius Tuesday 2:00 a.m." class="wob_t wob_gs_l9" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="228" y="38" direction="ltr">8</text><text aria-label="47°Fahrenheit Tuesday 2:00 a.m." class="wob_t wob_gs_l9" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="228" y="38" direction="ltr">47</text><text aria-label="8°Celsius Tuesday 3:00 a.m." class="wob_t wob_gs_l10" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="252" y="38" direction="ltr"></text>
<text aria-label="47°Fahrenheit Tuesday 3:00 a.m." class="wob_t wob_gs_l10" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="252" y="38" direction="ltr"></text><text aria-label="8°Celsius Tuesday 4:00 a.m." class="wob_t wob_gs_l11" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="276" y="40" direction="ltr"></text><text aria-label="46°Fahrenheit Tuesday 4:00 a.m." class="wob_t wob_gs_l11" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="276" y="40" direction="ltr"></text><text aria-label="8°Celsius Tuesday 5:00 a.m." class="wob_t wob_gs_l12" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="300" y="38" direction="ltr">8</text><text aria-label="47°Fahrenheit Tuesday 5:00 a.m." class="wob_t wob_gs_l12" style="font:bold 11px arial;text-anchor:middle;display:none" fill="#b5b5b5" x="300" y="38" direction="ltr">47</text><text aria-label="8°Celsius Tuesday 6:00 a.m." class="wob_t wob_gs_l13" style="font:bold 11px arial;text-anchor:middle" fill="#b5b5b5" x="324" y="38" direction="ltr"></text> */}



// add sun and moon photo or time 


// >>>>>> Requirements 

- Using Openweathermap for cities ( use how to start )
- Use ajax to call and retrieve in JSON format and save in JSON format 
- Dynamically create elements to view in browser 

- DISPLAY : 
 # city 
 # date 
 # icon image ( weather condition)
 # tempreture 
 # Humidy 
 # wind speed 
 # UV index 
 ## Future conditions ( 5 day forcast excluding windspeed and humidity)

- search history of user 
- clicking on city should perform a new search