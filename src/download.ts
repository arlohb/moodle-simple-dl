
export const download = async (
    url: string,
    outfile: string,
    session: string,
): Promise<void> => {
    const response = await fetch(
        url,
        { headers: { Cookie: `MoodleSession=${session}` } },
    );

    Bun.write(
        outfile,
        await response.blob(),
        { createPath: true, },
    );
};

