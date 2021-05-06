package com.hamibot.hamibot.model.explorer;

import io.reactivex.Single;

public interface ExplorerProvider {

    Single<? extends ExplorerPage> getExplorerPage(ExplorerPage parent);
}
