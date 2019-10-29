/**
 * @author WMXPY
 * @namespace Ronpa
 * @description Declare
 */

export type Reaction = {

    readonly at: Date;
    readonly by: string;
    readonly type: string;
};

export type Thesis = {

    readonly insiders: string[];
};

export type FlatRecord = {

    readonly id: string;
    readonly at: Date;
    readonly by: string;
    readonly story: string;
    readonly content: string;

    readonly thesis?: Thesis;

    readonly reactions?: Reaction[];
    readonly extras?: Record<string, any>;
};
