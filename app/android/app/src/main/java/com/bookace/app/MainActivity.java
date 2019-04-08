package com.bookace.app;

import com.reactnativenavigation.NavigationActivity;
import android.content.Intent;
import cl.json.ShareApplication;

public class MainActivity extends NavigationActivity implements ShareApplication {
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
