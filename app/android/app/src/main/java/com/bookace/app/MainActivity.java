package com.bookace.app;

import android.os.Bundle;
import com.reactnativenavigation.NavigationActivity;
import android.content.Intent;
import cl.json.ShareApplication;

public class MainActivity extends NavigationActivity implements ShareApplication {
		@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SplashScreen.show(this);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }

		@Override
     public String getFileProviderAuthority() {
            return BuildConfig.APPLICATION_ID + ".provider";
     }
}
